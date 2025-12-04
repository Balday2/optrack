/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterValue } from "@/types";
import { MapperDTO } from "@/types/mapper-typer";
import { CreateOperationDTO, UpdateOperationDTO } from "../DTO/operation.dto";
import { HelperFunctions } from "../_helper";
import { connectDB } from "../connect";
import { findPrefectureById } from "../data/prefecture";
import { OperationModel } from "../models/operation.model";

const buildQuery = (filters: Record<string, FilterValue>): Record<string, any> => {
  const query: Record<string, any> = {};

  if (HelperFunctions.isValidFilter(filters.centre_id) && filters.centre_id !== "all") {
    query.centre_id = filters.centre_id;
  }

  if (HelperFunctions.isValidFilter(filters.coordinator_id) && filters.coordinator_id !== "all") {
    query.coordinator_id = filters.coordinator_id;
  }

  HelperFunctions.dateFilter(query, filters.date, "date");
  HelperFunctions.searchFilter(query, filters.search, ["nombre"]);

  return query;
}

export class OperationService {

  static async create(data: CreateOperationDTO) {
    await connectDB();
    
    // Validation: Empêcher les dates futures
    const operationDate = new Date(data.date);
    const today = new Date();
    today.setHours(23, 59, 59, 999); // Fin de la journée actuelle
    
    if (operationDate > today) {
      throw new Error("Impossible de créer une opération pour une date future");
    }
    
    // Validation: Vérifier qu'il n'y a pas déjà une opération pour cet opérateur à cette date
    const existingOperation = await OperationModel.findOne({
      operator_id: data.operator_id,
      date: {
        $gte: new Date(operationDate.getFullYear(), operationDate.getMonth(), operationDate.getDate()),
        $lt: new Date(operationDate.getFullYear(), operationDate.getMonth(), operationDate.getDate() + 1)
      }
    });
    
    if (existingOperation) {
      throw new Error("Une opération existe déjà pour cet opérateur à cette date");
    }
    
    const operation = new OperationModel(data);
    return await operation.save();
  }

  static async getByFilters(page: number, pageSize: number, filters: Record<string, FilterValue>): Promise<MapperDTO<any>> {
    await connectDB();

    const skip = (page - 1) * pageSize;
    const query = buildQuery(filters);

    console.log(query)


    const [data, totalCount] = await Promise.all([
      OperationModel.find(query)
        .populate("centre_id")
        .populate("coordinator_id")
        .populate("operator_id")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(pageSize),
      OperationModel.countDocuments(query)
    ]);


    return {
      data: data,
      pagination: {
        page,
        limit: pageSize,
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize),
      },
    };
  }

  static async getByFiltersByCoordinator(page: number, pageSize: number, filters: Record<string, FilterValue>): Promise<MapperDTO<any>> {
    await connectDB();
    return await this.getByFilters(page, pageSize, {
      ...filters,
      coordinator_id: filters.coordinator_id
    });
  }

  static async getById(id: string) {
    await connectDB();
    return await OperationModel.findById(id)
      .populate("centre_id")
      .populate("coordinator_id")
      .populate("operator_id");
  }

  static async update(id: string, data: UpdateOperationDTO) {
    await connectDB();
    return await OperationModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })
    .populate("centre_id")
    .populate("coordinator_id")
    .populate("operator_id");
  }

  static async delete(id: string) {
    await connectDB();
    return await OperationModel.findByIdAndDelete(id);
  }

  static async toggleStatus(id: string, status: string) {
    await connectDB();
    return await OperationModel.findByIdAndUpdate(
      id, 
      { status }, 
      { new: true }
    )
    .populate("centre_id")
    .populate("coordinator_id")
    .populate("operator_id");
  }

  static async exportWeeklyReport(startDate: string, endDate: string) {
    await connectDB();
    
    // Convertir les dates en objets Date
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Vérifier que les dates sont valides
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new Error("Les dates fournies ne sont pas valides");
    }
    
    // Vérifier que startDate est avant endDate
    if (start >= end) {
      throw new Error("La date de début doit être antérieure à la date de fin");
    }
    
    // Fonction pour obtenir le nom du jour de la semaine
    const getDayName = (date: Date): string => {
      const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
      return days[date.getDay()];
    };
    
    // Vérifier que startDate est un lundi
    if (getDayName(start) !== 'lundi') {
      throw new Error("La date de début doit être un lundi");
    }
    
    // Vérifier que endDate est un vendredi
    if (getDayName(end) !== 'vendredi') {
      throw new Error("La date de fin doit être un vendredi");
    }
    
    // Vérifier que l'intervalle correspond exactement à 5 jours (lundi à vendredi)
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays !== 4) { // 4 car on compte de lundi à vendredi inclus
      throw new Error("L'intervalle doit correspondre exactement à une semaine (lundi à vendredi)");
    }
    
    const operations = await OperationModel.find({
      date: { 
        $gte: start,
        $lte: new Date(end.getTime() + 24 * 60 * 60 * 1000 - 1) // Fin de la journée vendredi
      }
    })
    .populate("centre_id", ["name", "prefecture_id", "commune_id"])
    .populate("operator_id", ["prenom", "nom", "matricule", "role"])
    .populate("coordinator_id", ["prenom", "nom"])
    .lean();

    // Grouper les opérations par région (prefecture_id)
    const groupedByRegion: Record<string, any> = {};

    operations.forEach((operation: any) => {
      // Vérifier que toutes les données nécessaires sont présentes
      if (!operation.centre_id || !operation.operator_id) return;
      
      const prefectureId = operation.centre_id.prefecture_id?.toString();
      const centreId = operation.centre_id._id?.toString();
      const operatorId = operation.operator_id._id?.toString();
      
      if (!prefectureId || !centreId || !operatorId) return;

      const operationDate = new Date(operation.date);
      const dayName = getDayName(operationDate);
      
      // Ignorer les opérations du samedi et dimanche (sécurité supplémentaire)
      if (dayName === 'samedi' || dayName === 'dimanche') return;

      // Initialiser la région si elle n'existe pas
      if (!groupedByRegion[prefectureId]) {
        groupedByRegion[prefectureId] = {
          numero: 0,
          region: prefectureId,
          centres: {}
        };
      }

      // Créer une clé unique pour chaque opérateur dans ce centre
      const operatorKey = `${centreId}_${operatorId}`;
      
      // Initialiser l'opérateur si il n'existe pas
      if (!groupedByRegion[prefectureId].centres[operatorKey]) {
        groupedByRegion[prefectureId].centres[operatorKey] = {
          centre: operation.centre_id.name || 'Centre inconnu',
          matricule: operation.operator_id.matricule || 'N/A',
          nom: `${operation.operator_id.prenom || ''} ${operation.operator_id.nom || ''}`.trim() || 'Nom inconnu',
          fonction: operation.operator_id.role,
          lundi: 0,
          mardi: 0,
          mercredi: 0,
          jeudi: 0,
          vendredi: 0
        };
      }

      // Assigner le nombre d'opérations au jour correspondant (pas de somme)
      const nombre = parseInt(operation.nombre) || 0;
      if (groupedByRegion[prefectureId].centres[operatorKey][dayName] !== undefined) {
        groupedByRegion[prefectureId].centres[operatorKey][dayName] = nombre;
      }
    });

    // Convertir l'objet en tableau et transformer les centres en tableau
    const result = Object.values(groupedByRegion).map((region: any, index: number) => ({
      numero: index + 1,
      region: findPrefectureById(Number(region.region))?.nom || 'N/A',
      centres: Object.values(region.centres)
    }));

    return result;
  }

  static async getTopCentersByOperations(filter: string) {
    await connectDB();

    const matchStage: Record<string, any> = {};
    const now = new Date();

    if (filter === "semaine") {
        const lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        matchStage.date = { $gte: lastWeek };
    } else if (filter === "mois") {
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        matchStage.date = { $gte: firstDayOfMonth };
    } else if (!isNaN(parseInt(filter))) {
        const year = parseInt(filter);
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year + 1, 0, 1);
        matchStage.date = { $gte: startDate, $lt: endDate };
    }

    const aggregationPipeline: any[] = [];

    if (Object.keys(matchStage).length > 0) {
        aggregationPipeline.push({ $match: matchStage });
    }

    aggregationPipeline.push(
      {
        $group: {
          _id: "$centre_id",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
      {
        $limit: 10,
      },
      {
        $lookup: {
          from: "centres",
          localField: "_id",
          foreignField: "_id",
          as: "center",
        },
      },
      {
        $unwind: "$center",
      },
      {
        $project: {
          _id: "$center._id",
          name: "$center.name",
          count: 1,
        },
      },
    );

    const topCentersPromise = OperationModel.aggregate(aggregationPipeline);
    const totalOperationsPromise = OperationModel.countDocuments(matchStage);

    const [topCenters, totalOperations] = await Promise.all([
        topCentersPromise,
        totalOperationsPromise
    ]);

    return {
      topCenters,
      totalOperations,
    };
  }

  static async getTopOperatorsByOperations(filter: string) {
    await connectDB();

    const matchStage: Record<string, any> = {};
    const now = new Date();

    if (filter === "semaine") {
        const lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        matchStage.date = { $gte: lastWeek };
    } else if (filter === "mois") {
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        matchStage.date = { $gte: firstDayOfMonth };
    } else if (!isNaN(parseInt(filter))) {
        const year = parseInt(filter);
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year + 1, 0, 1);
        matchStage.date = { $gte: startDate, $lt: endDate };
    }

    const aggregationPipeline: any[] = [];

    if (Object.keys(matchStage).length > 0) {
        aggregationPipeline.push({ $match: matchStage });
    }

    aggregationPipeline.push(
      {
        $group: {
          _id: "$operator_id",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
      {
        $limit: 10,
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "operator",
        },
      },
      {
        $unwind: "$operator",
      },
      {
        $project: {
          _id: "$operator._id",
          name: { $concat: ["$operator.prenom", " ", "$operator.nom"] },
          count: 1,
        },
      },
    );

    const topOperatorsPromise = OperationModel.aggregate(aggregationPipeline);
    
    const [topOperators] = await Promise.all([
        topOperatorsPromise,
    ]);

    return {
      topOperators,
    };
  }
}

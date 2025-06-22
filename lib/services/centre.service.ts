/* eslint-disable @typescript-eslint/no-explicit-any */
import { CentreModel } from "../models/centre.model";
import { UserModel } from "../models/user.model";
import { connectDB } from "../connect";
import { CentreDTO, CreateCentreDTO, UpdateCentreDTO } from "../DTO/centre.dto";
import { FilterValue } from "@/types";
import { MapperDTO } from "@/types/mapper-typer";
import { HelperFunctions } from "../_helper";

const buildQuery = (filters: Record<string, FilterValue>): Record<string, any> => {
  const query: Record<string, any> = {};

  if (HelperFunctions.isValidFilter(filters.status) && filters.status !== "all") {
    query.status = filters.status;
  }

  HelperFunctions.dateFilter(query, filters.date);
  HelperFunctions.searchFilter(query, filters.search, ["name"]);

  return query;
}

export class CentreService {

  static async create(data: CreateCentreDTO): Promise<CentreDTO> {
    await connectDB();
    const centre = new CentreModel(data);
    return await centre.save();
  }

  static async getAll(): Promise<CentreDTO[]> {
    await connectDB();
    return await CentreModel.find({ status: "actif" })
      .sort({ createdAt: -1 });
  }

  static async getByFilters(page: number, pageSize: number, filters: Record<string, FilterValue>): Promise<MapperDTO<CentreDTO>> {

    await connectDB();

    const skip = (page - 1) * pageSize;
    const query = buildQuery(filters);

    const [data, totalCount] = await Promise.all([
      CentreModel.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(pageSize),
      CentreModel.countDocuments(query)
    ]);

    return {
      data: data as CentreDTO[],
      pagination: {
        page,
        limit: pageSize,
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize),
      },
    };
  }

  static async getById(id: string): Promise<CentreDTO | null> {
    await connectDB();
    return await CentreModel.findById(id).populate("coordinator_id");
  }

  static async update(
    id: string,
    data: UpdateCentreDTO
  ): Promise<CentreDTO | null> {
    await connectDB();
    return await CentreModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })
  }

  static async delete(id: string) {
    await connectDB();
    // Retirer le centre du coordinateur avant suppression
    await UserModel.updateOne({ centre_id: id }, { $unset: { centre_id: 1 } });
    return await CentreModel.findByIdAndDelete(id);
  }


  static async toggleStatus(id: string, status: string) {
    await connectDB();
    return await CentreModel.findByIdAndUpdate(id, { status }, { new: true });
  }
}

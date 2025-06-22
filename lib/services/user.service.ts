/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserModel } from "@/lib/models/user.model";
import { connectDB } from "../connect";
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "../DTO/user.dto";
import { HelperFunctions } from "../_helper";
import { FilterValue } from "@/types";
import { MapperDTO } from "@/types/mapper-typer";
import { DEFAULT_PASSWORD } from "../constants";
import { RoleEnum } from "../Enums/role.enum";

const buildQuery = (filters: Record<string, FilterValue>): Record<string, any> => {
  const query: Record<string, any> = {};

  if (HelperFunctions.isValidFilter(filters.status) && filters.status !== "all") {
    query.status = filters.status;
  }

  if (HelperFunctions.isValidFilter(filters.sexe) && filters.sexe !== "all") {
    query.sexe = filters.sexe;
  }

  if (HelperFunctions.isValidFilter(filters.role) && filters.role === RoleEnum.COORDINATOR) {
    query.role = filters.role;
  } else {
    query.role = { $nin: ['admin', 'coordinator'] };
  }

  HelperFunctions.dateFilter(query, filters.date);
  HelperFunctions.searchFilter(query, filters.search, ["prenom", "nom", "phone", "matricule"]);

  return query;
}

export class UserService {

  static async create(data: CreateUserDTO) {
    await connectDB();
    const userData = {
      ...data,
      password: DEFAULT_PASSWORD
    };
    const user = new UserModel(userData);
    return await user.save();
  }

  static async getActiveOperatorsCount(): Promise<number> {
    await connectDB();
    return await UserModel.countDocuments({
      status: "actif",
      role: { $nin: [RoleEnum.ADMIN, RoleEnum.COORDINATOR] }
    });
  }

  static async getOperatorsByCentreId(centreId: string): Promise<UserDTO[]> {
    await connectDB();
    return await UserModel.find({ centre_id: centreId })
      .populate("centre_id")
      .where("status").equals("actif")
      .where("role").ne(RoleEnum.ADMIN)
      .where("role").ne(RoleEnum.COORDINATOR)
      .sort({ createdAt: -1 });
  }

  static async getByFilters(page: number, pageSize: number, filters: Record<string, FilterValue>): Promise<MapperDTO<UserDTO>> {

    await connectDB();

    const skip = (page - 1) * pageSize;
    const query = buildQuery(filters);

    const [data, totalCount] = await Promise.all([
      UserModel.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(pageSize)
        .populate("centre_id"),
      UserModel.countDocuments(query)
    ]);

    return {
      data: data as UserDTO[],
      pagination: {
        page,
        limit: pageSize,
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize),
      },
    };
  }

  static async getById(id: string): Promise<UserDTO | null> {
    await connectDB();
    return await UserModel.findById(id)
      .populate("centre_id")
      .where("role").ne(RoleEnum.ADMIN);
  }

  static async update(id: string, data: UpdateUserDTO) {
    await connectDB();
    return await UserModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).populate("centre_id");
  }

  static async delete(id: string) {
    await connectDB();
    return await UserModel.findByIdAndDelete(id)
      .where("role").ne(RoleEnum.ADMIN);
  }


  static async toggleStatus(id: string, status: string) {
    await connectDB();
    return await UserModel.findByIdAndUpdate(id, { status }, { new: true })
      .where("role").ne(RoleEnum.ADMIN);
  }
}

import { Fonction } from "../models/fonction.model";
import { connectDB } from "../connect";


export class FonctionService {

  static async create(nom: string) {
    await connectDB();
    const fonction = new Fonction({ nom });
    return await fonction.save();
  }

  static async getAll() {
    await connectDB();
    return await Fonction.find().sort({ createdAt: -1 });
  }

  static async delete(id: string) {
    await connectDB();
    return await Fonction.findByIdAndDelete(id);
  }
} 
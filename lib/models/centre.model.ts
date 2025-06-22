import mongoose, { type Model, Schema } from "mongoose";
import { CentreDTO } from "../DTO/centre.dto";

const CentreSchema = new Schema<CentreDTO>(
  {
    name: {
      type: String,
      required: [true, "Le nom du centre est requis"],
      trim: true,
      unique: true,
    },
    prefecture_id: {
      type: Number,
      required: [true, "La préfecture est requise"],
      trim: true,
    },
    commune_id: {
      type: Number,
      required: [true, "La commune est requise"],
      trim: true,
    },
    quartier_id: {
      type: Number,
      required: [true, "Le quartier est requis"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["actif", "inactif"],
      default: "actif",
    },
  },
  {
    timestamps: true,
  }
);

export const CentreModel: Model<CentreDTO> =
  mongoose.models?.Centre || mongoose.model<CentreDTO>("Centre", CentreSchema);

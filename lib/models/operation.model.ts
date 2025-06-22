import mongoose, { type Model, Schema } from "mongoose";
import { OperationDTO } from "../DTO/operation.dto";

const OperationSchema = new Schema<OperationDTO>(
  {
    nombre: {
      type: Number,
      required: [true, "Le nombre est requis"],
      min: [1, "Le nombre doit être supérieur à 0"],
    },
    date: {
      type: Date,
      required: [true, "La date est requise"],
      default: Date.now,
    },
    centre_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Centre",
      required: [true, "Le centre est requis"],
    },
    coordinator_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Le coordinateur est requis"],
    },
    operator_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "L'opérateur est requis"],
    },
  },
  {
    timestamps: true,
  }
);

export const OperationModel: Model<OperationDTO> =
  mongoose.models?.Operation ||
  mongoose.model<OperationDTO>("Operation", OperationSchema);

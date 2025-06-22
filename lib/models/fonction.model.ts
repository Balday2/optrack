import mongoose, { Schema, Document } from 'mongoose';

export interface IFonction extends Document {
  nom: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const fonctionSchema = new Schema<IFonction>(
  {
    nom: {
      type: String,
      required: [true, 'Le nom de la fonction est requis'],
      unique: true,
      trim: true
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// Index pour optimiser les requêtes
fonctionSchema.index({ nom: 1 });
fonctionSchema.index({ status: 1 });

export const Fonction = mongoose.models.Fonction || mongoose.model<IFonction>('Fonction', fonctionSchema);

export default Fonction;

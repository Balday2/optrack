import mongoose, { Schema, CallbackError, type Model } from "mongoose";
import bcrypt from "bcryptjs";
import { UserDTO } from "../DTO/user.dto";

const UserSchema = new Schema<UserDTO>(
  {
    nom: {
      type: String,
      required: [true, "Nom est requis"],
      trim: true,
    },
    prenom: {
      type: String,
      required: [true, "Prénom est requis"],
      trim: true,
    },
    sexe: {
      type: String,
      enum: ["Masculin", "Feminin"],
      required: [true, "Sexe est requis"],
    },
    phone: {
      type: String,
      required: [true, "Numéro de téléphone est requis"],
      unique: true,
      trim: true,
    },
    adresse: {
      type: String,
      required: [true, "Adresse est requise"],
    },
    matricule: {
      type: String,
      required: [true, "Matricule est requis"],
    },
    status: {
      type: String,
      enum: ["actif", "inactif"],
      default: "actif",
    },
    centre_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Centre",
      required: [true, "Centre est requis"],
    },
    coordinator_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    password: {
      type: String,
      required: [false, "Mot de passe est requis"],
      minlength: [6, "Le mot de passe doit contenir au moins 6 caractères"],
      default: "123456",
    },
    role: {
      type: String,
      required: [true, "Rôle est requis et assurez-vous que le rôle est valide"],
    },
  },
  {
    timestamps: true,
  }
);

// Hash le mot de passe avant la sauvegarde
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: unknown) {
    next(error as CallbackError);
  }
});

// Méthode pour comparer les mots de passe
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const UserModel: Model<UserDTO> =
  mongoose.models?.User || mongoose.model<UserDTO>("User", UserSchema);

"use server";

import { FonctionService } from "../services/fonction.service";

export async function createFonction(nom: string) {
  try {
    const fonction = await FonctionService.create(nom);
    return { success: true, data: JSON.parse(JSON.stringify({ fonction })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getFonctionList() {
  try {
    const fonctions = await FonctionService.getAll();
    return JSON.parse(JSON.stringify(fonctions));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function deleteFonction(id: string) {
  try {
    const fonction = await FonctionService.delete(id);
    return { success: true, data: JSON.parse(JSON.stringify({ fonction })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
} 
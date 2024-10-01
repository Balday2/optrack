export enum RoleEnum {
  COORDINATOR = "coordinateur",
  ADMIN = "admin",
};

export enum FonctionEnum {
  SUPERVISEUR = "superviseur",
  SUPERVISEUR_EQUIPE = "Superviseur d\'equipe",
  AGENT_EXPERTISE = "Agent d\'expertise",
  OPERATEUR_SAISIE = "Operateur de saisie",
  CONTROLEUR_BORDEREAUX = "Controleur de bordereaux",
  HOTESSE_ACCUEIL = "Hotesse d'accueil",
  HOTESSE_RETRAIT = "Hotesse de retrait",
}

export const FonctionLabels: { [key in FonctionEnum]: string } = {
  [FonctionEnum.SUPERVISEUR]: FonctionEnum.SUPERVISEUR,
  [FonctionEnum.SUPERVISEUR_EQUIPE]: FonctionEnum.SUPERVISEUR_EQUIPE,
  [FonctionEnum.AGENT_EXPERTISE]: FonctionEnum.AGENT_EXPERTISE,
  [FonctionEnum.OPERATEUR_SAISIE]: FonctionEnum.OPERATEUR_SAISIE,
  [FonctionEnum.CONTROLEUR_BORDEREAUX]: FonctionEnum.CONTROLEUR_BORDEREAUX,
  [FonctionEnum.HOTESSE_ACCUEIL]: FonctionEnum.HOTESSE_ACCUEIL,
  [FonctionEnum.HOTESSE_RETRAIT]: FonctionEnum.HOTESSE_RETRAIT
};
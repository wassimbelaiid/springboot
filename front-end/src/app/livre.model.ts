export interface Auteur {
  id: number;
  nom: string;
  prenom?: string; 
}

export interface Livre {
  id?: number; 
  isbn: string;
  titre: string;
  auteur?: Auteur; 
  categorie: Categorie; 
}
export interface Categorie {
  id: number;
  nom: string;
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { LivreService } from '../livre.service';
import { Livre } from '../livre.model';

@Component({
  selector: 'app-livre-list',
  templateUrl: './livre-list.component.html'
})
export class LivreListComponent implements OnInit {
  livres: Livre[] = [];
  categories: any[] = [];

  constructor(private livreService: LivreService, private router: Router) {} 

  ngOnInit(): void {
    this.loadLivres();
    
  }

  errorMessage: string | null = null;
  

  loadLivres(): void {
    this.livreService.getAllLivres().subscribe({
      next: (data) => {
        this.livres = data;
        console.log(this.livres); 
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = "Erreur lors du chargement des livres.";
        console.error("Erreur lors du chargement des livres", error);
      }
    });
  }
  


  ajouterNouveauLivre(): void {
    this.router.navigate(['/add-livre']); 
  }

  // Méthode pour éditer un livre
  editLivre(id: number): void {
    this.router.navigate(['/edit-livre', id]);
  }

  // Méthode pour supprimer un livre
  deleteLivre(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) { // Confirmation avant suppression
      this.livreService.deleteLivre(id).subscribe(() => {
        this.loadLivres(); // Rechargez la liste des livres après la suppression
      }, error => {
        console.error("Erreur lors de la suppression du livre", error);
      });
    }
  }
}

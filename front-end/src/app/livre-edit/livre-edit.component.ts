import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivreService } from '../livre.service';
import { Livre } from '../livre.model';

@Component({
  selector: 'app-livre-edit',
  templateUrl: './livre-edit.component.html'
})
export class LivreEditComponent implements OnInit {
  livreId?: number; // Déclaration ici, avec le '?' pour indiquer qu'il est facultatif
  livreForm: FormGroup;
  errorMessage: string | null = null; 

  constructor(
    private formBuilder: FormBuilder,
    private livreService: LivreService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Initialisation du formulaire réactif
    this.livreForm = this.formBuilder.group({
      isbn: ['', Validators.required],
      titre: ['', Validators.required],
      auteur: this.formBuilder.group({
        id: ['', Validators.required],
        nom: ['', Validators.required],
        prenom: ['']
      })
    });
  }

  ngOnInit(): void {
    // Récupération de l'ID du livre à partir des paramètres de l'URL
    this.route.paramMap.subscribe(params => {
      this.livreId = +params.get('id')!; // Assure-toi que 'id' est le nom correct du paramètre dans l'URL
      this.loadLivre();
    });
  }

  loadLivre(): void {
    if (this.livreId) {
      this.livreService.getLivreById(this.livreId).subscribe(
        (livre: Livre) => {
          this.livreForm.patchValue(livre); // Pré-remplit le formulaire
        },
        error => {
          console.error("Erreur lors du chargement du livre", error);
          this.errorMessage = "Erreur lors du chargement du livre."; 
        }
      );
    }
  }
  

  onSubmit(): void {
    if (this.livreForm.valid) {
      // Soumission des modifications du livre
      this.livreService.updateLivre(this.livreId!, this.livreForm.value).subscribe(() => {
        this.router.navigate(['/livres']);
      });
    }
  }
}

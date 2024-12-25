import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivreService } from '../livre.service';
import { AuteurService } from '../auteur.service'; 
import { CategorieService } from '../categorie.service'; 
import { Livre } from '../livre.model';

@Component({
  selector: 'app-livre-add',
  templateUrl: './livre-add.component.html'
})
export class LivreAddComponent implements OnInit {
  livreForm: FormGroup;
  auteurs: any[] = []; 
  categories: any[] = []; 

  constructor(
    private fb: FormBuilder,
    private livreService: LivreService,
    private auteurService: AuteurService,
    private categorieService: CategorieService,
    private router: Router
  ) {
    this.livreForm = this.fb.group({
      isbn: ['', Validators.required],
      titre: ['', Validators.required],
      auteur: this.fb.group({
        id: [null, Validators.required] // Gardez uniquement l'id
      }),
      categorie: this.fb.group({
        id: [null, Validators.required]
      })
    });
    
    
  }

  ngOnInit() {
    this.loadAuteurs(); 
    this.loadCategories(); 
  }

  loadAuteurs() {
    this.auteurService.getAuteurs().subscribe(
      data => this.auteurs = data,
      error => console.error('Erreur lors du chargement des auteurs', error)
    );
  }
  

  loadCategories() {
    this.categorieService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.livreForm.value); // Ajoutez cette ligne pour le débogage
    if (this.livreForm.valid) {
      const livre: Livre = this.livreForm.value;
      this.livreService.addLivre(livre).subscribe(
        () => {
          this.router.navigate(['/livres']);
        },
        error => {
          console.error('Erreur lors de l\'ajout du livre', error);
        }
      );
    } else {
      console.log('Form is invalid'); // Ajoutez cette ligne pour le débogage
    }
  }
  
}
  

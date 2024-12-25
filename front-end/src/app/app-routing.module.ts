import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreListComponent } from './livre-list/livre-list.component';
import { LivreAddComponent } from './livre-add/livre-add.component';
import { LivreEditComponent } from './livre-edit/livre-edit.component';

const routes: Routes = [
  { path: 'livres', component: LivreListComponent },
  { path: 'add-livre', component: LivreAddComponent },
  { path: 'edit-livre/:id', component: LivreEditComponent },
  { path: '', redirectTo: '/livres', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

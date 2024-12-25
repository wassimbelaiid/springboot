import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auteur } from './auteur.model'; 

@Injectable({
  providedIn: 'root'
})
export class AuteurService {
  private apiUrl = 'http://localhost:9090/api/auteurs'; 

  constructor(private http: HttpClient) {}

  getAuteurs(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(this.apiUrl);
  }
}

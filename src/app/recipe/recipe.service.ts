import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

   private baseUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    const url = `${this.baseUrl}/recipe.json`;
    return this.http.get<Recipe[]>(url);
  }

  getRecipeDetail(id: number): Observable<Recipe> {
    const url = `${this.baseUrl}/${id}/recipe.json`;
    return this.http.get<Recipe>(url);
  }
}
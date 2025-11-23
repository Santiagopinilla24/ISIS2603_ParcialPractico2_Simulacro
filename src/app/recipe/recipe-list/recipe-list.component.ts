import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../Recipe';
import { RecetaService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  loading: boolean = true;

  constructor(
    private recetaService: RecetaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recetaService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading recipes:', error);
        this.loading = false;
      }
    });
  }
    getIngredientCount(recipe: Recipe): number {
    if (!recipe.ingredientes) return 0;
    return recipe.ingredientes.length;
  }
  onSelect(recipe: Recipe) {
    this.router.navigate(['/recipe', recipe.id]);
  }
}
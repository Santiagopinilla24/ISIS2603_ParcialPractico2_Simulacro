import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recetaService: RecetaService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = params['id'];
      this.loadRecipeDetail(recipeId);
    });
  }

  loadRecipeDetail(id: string): void {
    this.loading = true;
    const numericId = Number(id);
    
    this.recetaService.getRecipeDetail(numericId).subscribe({
      next: (recipe) => {
        this.recipe = recipe;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading recipe detail:', error);
        this.loading = false;
      }
    });
  }
  
  
  goBack(): void {
    this.router.navigate(['/recipe']);
  }
}
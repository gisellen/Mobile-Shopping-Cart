import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadRecipe: Recipe;

  constructor(private activeRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        return;
      }
        const recipeId = paramMap.get('recipeId');
        this.loadRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe(){
    this.recipesService.deleteRecipe(this.loadRecipe.id);
  }

  // checks when something is triggered
  // ngAfterViewChecked(){
  //   console.log("after view checked")
  // }
  
}

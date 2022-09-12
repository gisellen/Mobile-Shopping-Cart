import { Component, OnInit } from '@angular/core';
import { Recipe, Cart } from './recipe.interface';
import { RecipesService } from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  cart: Cart[]; //declares empty obj (WILL BE RESET ONCE REFERESHED)

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  addToCart(recipeId: string){
    this.cart = this.recipesService.addToCart(recipeId);
  }
}

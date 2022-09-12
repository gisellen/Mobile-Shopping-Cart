import { Injectable } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { Recipe, Cart } from './recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'oc',
      title: 'orange chicken',
      imageURL: 'https://dinnerthendessert.com/wp-content/uploads/2017/08/Panda-Express-Orange-Chicken-8-.jpg',
      ingredients: ['Chicken', 'BBQ Sauce', 'Soy Sauce'],
      amount: 4.5
    },
    {
      id: 'mb',
      title: 'mongolian beef',
      imageURL: 'https://whatmollymade.com/wp-content/uploads/2021/07/instant-pot-mongolian-beef-recipe.jpg',
      ingredients: ['Beef', 'Onion', 'Soy Sauce'],
      amount: 5
    },
  ];

  private cart: Cart[] = [];
  totalAmt: number;

  constructor() {}

  getAllRecipes(){
    return[...this.recipes];
  }

  getAllCart(){
    return this.cart;
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }

  addToCart(recipeId: string){
    let item = this.getRecipe(recipeId)
    let temp = {} as Cart;
    temp.id = item.id;
    temp.title = item.title;
    temp.imageURL = item.imageURL;
    temp.amount = item.amount;

    if(this.cart.some(id => id.id === temp.id)){
      let index = this.cart.findIndex(obj => obj.id === temp.id);
      this.cart[index].quantity++;
      return this.cart
    } else {
      temp.quantity = 1;
      this.cart.push(temp);
      return this.cart
    }
  }

  removeFromCart(recipeId: string){
    let item = this.getRecipe(recipeId)
    let temp = {} as Cart;
    temp.id = item.id;
    if(this.cart.some(id => id.id === temp.id && id.quantity != 0)){
      let index = this.cart.findIndex(obj => obj.id === temp.id);
      this.cart[index].quantity--;
      return this.cart
    } else {
      return this.cart
    }
  }

  getTotalAmount(){
    let num = 0
    this.cart.forEach(obj => {
      num += (obj.amount * obj.quantity);
    })
    this.totalAmt = num;
    console.log(num)

    return this.totalAmt;
  }
}
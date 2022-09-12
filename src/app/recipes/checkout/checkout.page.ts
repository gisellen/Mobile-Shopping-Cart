import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Cart } from '../recipe.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  loadCart: Cart[];
  totalAmt: number;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.loadCart = this.recipesService.getAllCart()
    this.totalAmt = this.recipesService.getTotalAmount();
  }

  addMore(id: string){
    this.recipesService.addToCart(id);
    this.totalAmt = this.getTotalAmount();
  }

  removeOne(id: string){
    this.recipesService.removeFromCart(id);
    this.totalAmt = this.getTotalAmount();
  }

  getTotalAmount(){
    return this.recipesService.getTotalAmount();
  }
}

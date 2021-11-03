import { Component, OnInit } from '@angular/core';
import products from './products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  ProductList:any=[]; //Intialization for list of products 
  Product:any=[]; // Single product Intialization
  isItemAddingToCard:Boolean=false; //desides whther to show add cart success  message
  
  ngOnInit(): void {
    this.ProductList=products;
  }
 
  getProductInfoByProductId(product:any){
    //Reset global property
    this.isItemAddingToCard=false;
    this.Product=product;

  }
  addItemToCart(){
    //Reset global properties
    this.isItemAddingToCard=true;
  }

}

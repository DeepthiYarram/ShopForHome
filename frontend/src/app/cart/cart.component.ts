import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product:any = [];
  public grandtotal !:number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    // this.cartService.getProducts().subscribe(res=>{
    //   this.product=res;
    //   this.grandtotal = this.cartService.getTotalPrice();
    // })




  }
  



  removeItem(item:any){
    //this.cartService.removeCartItem(item);
  }
  emptycart(){
    //this.cartService.removeAllCart();
  }
}

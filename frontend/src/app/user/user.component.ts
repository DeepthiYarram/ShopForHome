import { Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
import { User } from '../user';
import { Product } from '../_model/product.model';
import { Wishlist } from '../_model/wishlist.model';
import { CartService } from '../_services/cart.service';
import { ProductServiceService } from '../_services/product-service.service';
import { UserService } from '../_services/user.service';
import { WishlistService } from '../_services/wishlist.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message: string | undefined;
  products: any;
  wishlist: Wishlist[] = [];
  enteredSearchValue:string = '';
  // wishlist: Wishlist = {
  //   userName: '',
  //   productName: '',
  //   productDiscountedPrice: 0,
  //   productImageLink: ''
  // }

  private totalItem:number = 0;
  constructor(private userService: UserService,
    private productService: ProductServiceService,
    private wishListService: WishlistService,
    private CartService: CartService) { }

  ngOnInit(): void {
    this.forUser();
    this.getProducts();

    // this.CartService.getProducts().subscribe(res=>{
    //   this.totalItem = res.length;
    // });
  }

  forUser() {
    this.userService.forUser().subscribe(
      (response) => {
        console.log(response);
        this.message = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (resp) => {
        console.log(resp);
        this.products = resp;
        //cart code
        this.products.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        })
      },
      (error) => console.log(error)
    );
  }

  addToWishlist(product: Product) {
    console.log(product);

    const theWishList = new Wishlist(product);

   
    this.wishListService.addNewWishlist(product);
  }

  // addtocart(product: any) {
  //   this.CartService.addtoCart(product);

  // }

  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();


  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue)
    console.log(this.enteredSearchValue)
  }

  
}


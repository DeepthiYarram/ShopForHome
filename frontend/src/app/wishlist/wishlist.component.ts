import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../_services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlistData: any = [];
  constructor(private http: HttpClient,
    private wishlistservice: WishlistService) { }

  ngOnInit(): void {
    this.getWishlistProducts();
  }

  getWishlistProducts() {
    const userName = localStorage.getItem("userName");
    this.wishlistservice.getWishlist().subscribe(
      (resp) => {
        console.log(resp);
        this.wishlistData = resp;
        console.log(this.wishlistData);
      }
    );
  }

  deleteWishlistProduct(id: number) {
    this.wishlistservice.deleteWishlistProduct(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getWishlistProducts();
      },
      (error) => console.log(error)
    );
  }
}

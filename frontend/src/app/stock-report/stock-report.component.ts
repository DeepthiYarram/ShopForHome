import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../_services/product-service.service';

@Component({
  selector: 'app-stock-report',
  templateUrl: './stock-report.component.html',
  styleUrls: ['./stock-report.component.css']
})
export class StockReportComponent implements OnInit {

  products :any;
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      (resp)=>{
        console.log(resp);
        this.products=resp;
      },(error)=>console.log(error)
    );
  }

  

  printPage(){
    window.print();
  }
}

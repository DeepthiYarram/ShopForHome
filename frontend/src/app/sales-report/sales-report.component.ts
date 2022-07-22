import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalesReportService } from '../_services/sales-report.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  salesDetails:any = [];
  constructor(private salesService:SalesReportService) { }

  ngOnInit(): void {
    this.getSalesReport();
  }

  getSalesReport(){

    this.salesService.getSalesReport().subscribe(
      (res)=>{
        console.log(res);
        this.salesDetails = res;
      },
      (error)=>console.log(error)
    );
  }

  printList(){
    window.print();
  }

  date(dateForm:NgForm){
    console.log(dateForm.value);
  }
}

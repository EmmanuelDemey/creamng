import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'demo-app',
  template: `<c3m-pagination (pageChange)="switchPage($event)" [startPage]="currentPage" [totalNbItems]="length" [nbItemsPerPage]="perPageFilter"></c3m-pagination>`
})
export class AppComponent implements OnInit {

  perPageFilter: number = 4;
  currentPage: number = 1; 
  length: number = 15;

  constructor() { }

  ngOnInit() {
  }

  switchPage(page:number){
    this.currentPage = page;
  }
}

import { Component } from '@angular/core';


@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
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

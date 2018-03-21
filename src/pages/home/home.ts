import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


export interface Result {
  title: string;
  author: string;
  date: number;
  //image: string;

}

const fakeResults: Result[] = [
  {title: 'Test', author: 'TestA', date:1997},
  {title: 'Test2', author: 'Test2A', date:2018},
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results: Result[];
 // searchQuery: string = '';
  constructor(public navCtrl: NavController) {
    this.results = fakeResults;
  }

}

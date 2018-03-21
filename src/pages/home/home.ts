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
  searchQuery: string = '';
  constructor(public navCtrl: NavController) {
    this.results = fakeResults;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
   // this.resu();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

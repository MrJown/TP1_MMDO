import { Component } from '@angular/core';
import { DetailsPage } from '../details/details';
import { HttpClient } from '@angular/common/http';
import { KEY } from '../../app/tmdb';
import { Observable } from 'rxjs/Observable';
import { AsyncPipe } from '@angular/common';



export interface Result {
  title: string;
  original_title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  detailsPage = DetailsPage;
  results: Observable<Result[]>;
 // searchQuery: string = '';
  constructor(public http: HttpClient) {
    this.results = Observable.of([]);
  }
  getItems(ev: any) {
    const val = ev.target.value;
    this.results = val ? this.fetchItems(val) : Observable.of([]);
  }

  fetchItems(val:string):Observable<Result[]>{
    return this.http.get<Result[]>('https://api.themoviedb.org/3/search/movie', {
      params: {
        'api_key' : KEY, 'query': val, 'language' : 'fr-FR'
      }
    }).pluck('results');
  }

}


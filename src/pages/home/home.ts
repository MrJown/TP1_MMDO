import { Component } from '@angular/core';
import { DetailsPage } from '../details/details';
import { HttpClient } from '@angular/common/http';
import { KEY } from '../../app/tmdb';
import { Observable } from 'rxjs/Observable';
import { AsyncPipe } from '@angular/common';
// import {}



export interface Result {
  title: string;
  original_title: string;
  author: string;
  release_date: string;
  overview: string;
  popularity: number;
  poster_path: string;
}

// const fakeResults: Result[] = [
//   { title: 'Test', author: 'TestA', date: 1997 },
//   { title: 'Test2', author: 'Test2A', date: 2018 },
// ];

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

  discoverMovies(): Observable<Result[]> {
    return this.http.get<Result[]>('https://api.themoviedb.org/3/search/movie', {
      params: {
        'api_key': KEY, 'primary_release_year': '2018', 'language': 'fr-FR'
      }
    }).pluck('results');

  }

}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieLibrary } from './movie.library';

export type ApiResponse = {
  Response: string;
  Search: MovieLibrary[];
  totalResults: string;
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiURL: string = 'http://www.omdbapi.com/?apikey={key}';

  constructor(private httpClient: HttpClient) {}

  searchMovie(name: string) {
    return this.httpClient.get<any>(`${this.apiURL}&s=${name}`);
  }
}


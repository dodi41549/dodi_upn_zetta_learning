import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieService } from './movie.service';

@NgModule({
    declarations: [
      // All declarations
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      // Other imports
    ],
    providers: [],
    bootstrap: [MovieService]
  })

  export class MovieLibrary {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }


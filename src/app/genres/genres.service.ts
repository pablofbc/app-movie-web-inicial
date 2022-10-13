import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genreDTO } from './genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private _http: HttpClient) { }

  private apiURL = environment.apiURL + '/genres';

  getAll(): Observable<genreDTO[]> {
    return this._http.get<genreDTO[]>(this.apiURL); //[{ id: 1, name: 'Drama' }]
  }
}

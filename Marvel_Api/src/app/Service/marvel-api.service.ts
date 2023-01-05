import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http:HttpClient) {}

  BaseUrl = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2b371933d7321b6e87246a7f90a42814&hash=4387dde814a0c4687a2e3bde2e699313';
  allCharacters():Observable<any>
  {
    return this.http.get(this.BaseUrl);
  }



}

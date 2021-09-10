import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';
import {CountryDetails} from "../models/country-details.model";

const baseUrl = 'http://localhost:8080/countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(baseUrl);
  }

  get(name: any): Observable<Country> {
    return this.http.get(`${baseUrl}/${name}`);
  }

  findByName(name: any): Observable<CountryDetails> {
    console.log("calling the get country with " + name);
    return this.http.get<CountryDetails>(`${baseUrl}/${name}`);
  }
}

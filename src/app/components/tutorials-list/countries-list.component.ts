import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import {CountryService} from 'src/app/services/country.service';
import {CountryDetails} from "../../models/country-details.model";

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries?: Country[];
  currentCountry: Country = {};
  currentCountryDetails: CountryDetails = {};
  currentIndex = -1;
  name = '';

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.retrieveCountries();
  }

  retrieveCountries(): void {
    this.countryService.getAll()
      .subscribe(
        data => {
          this.countries = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  resetSelection(): void {
    this.currentCountry = {};
    this.currentCountryDetails = {};
    this.currentIndex = -1;
  }

  refreshList(): void {
    this.retrieveCountries();
    this.currentCountry = {};
    this.currentIndex = -1;
  }

  setActiveCountry(country: Country, index: number): void {
    this.currentCountry = country;
    this.currentIndex = index;

    this.countryService.findByName(this.currentCountry.name)
      .subscribe(
        data => {
          this.currentCountryDetails = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}

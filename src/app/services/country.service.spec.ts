import { TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { CountryService } from './country.service';
import {CountriesListComponent} from "../components/tutorials-list/countries-list.component";
import {SearchPipe} from "../search.pipe";

describe('CountryService', () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

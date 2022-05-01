import { Injectable } from '@angular/core';
import { Planet, Resident } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class SWAPIService {
  apiUrl = 'https://swapi.dev/api';

  getPlanets(): Promise<Planet[]> {
    return fetch(this.apiUrl + '/planets')
      .then(res => res.json())
      .then(data => {
        data.results.forEach((p: Planet) => {
          let urlArr: string[];
          urlArr = p.url.split('/');
          p.id = parseInt(urlArr[5]);
        })
        console.log('returning planets:', data.results);
        return (data.results);
      });
  }

  constructor() { }
}

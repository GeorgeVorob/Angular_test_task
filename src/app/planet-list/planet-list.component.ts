import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/models';
import { SWAPIService } from '../swapi.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];
  constructor(api: SWAPIService) {
    api.getPlanets().then(res => this.planets = res);
  }

  ngOnInit(): void {
  }

}

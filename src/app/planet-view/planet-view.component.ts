import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet, Resident } from '../models/models';
import { SWAPIService } from '../swapi.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html',
  styleUrls: ['./planet-view.component.css']
})
export class PlanetViewComponent implements OnInit {
  planet: Planet | undefined;
  residentsInfo: Resident[] = [];
  constructor(private route: ActivatedRoute, private api: SWAPIService) { 
    let a = this.form.get('gender');

  }

  form = new FormGroup({
    gender: new FormControl('all'),
  });

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const planetIdParam = Number(routeParams.get('planetId'));
    fetch(this.api.apiUrl + '/planets/' + planetIdParam)
      .then(res => res.json())
      .then(data => this.planet = data)
      .then(data => {
        if (this.planet) {
          this.planet.residents.forEach(residentURL => {
            fetch(residentURL)
              .then(res => res.json())
              .then(data => this.residentsInfo.push(data));
          });
        }
      })
  }

}

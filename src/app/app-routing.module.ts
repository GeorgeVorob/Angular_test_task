import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetViewComponent } from './planet-view/planet-view.component';

const routes: Routes = [
  { path: '', component: PlanetListComponent },
  { path: 'planet-view/:planetId', component: PlanetViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

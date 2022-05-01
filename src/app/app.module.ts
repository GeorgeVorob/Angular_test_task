import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetViewComponent } from './planet-view/planet-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

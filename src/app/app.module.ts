import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 1 Importar FormsModule ngModel Es una directiva angular válida pero no está disponible por defecto.
// Pertenece al FormsModule opcional y debe optar por ese módulo para usarlo.
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    // 1 Importar FormsModule ngModel Es una directiva angular válida pero no está disponible por defecto.
    // Pertenece al FormsModule opcional y debe optar por ese módulo para usarlo.
    FormsModule,
    AppRoutingModule
  ],
  //providers: [ // no need to place any providers due to the `providedIn` flag...
  //],
  bootstrap: [AppComponent]
})
export class AppModule { }

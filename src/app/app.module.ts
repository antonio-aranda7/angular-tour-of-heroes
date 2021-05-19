import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 1 Importar FormsModule ngModel Es una directiva angular válida pero no está disponible por defecto.
// Pertenece al FormsModule opcional y debe optar por ese módulo para usarlo.
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// 6 / Habilitar servicios HTTP
import { HttpClientModule } from '@angular/common/http';

// 6 / Simular un servidor de datos
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
// 6 /
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    // 6 /
    HeroSearchComponent

  ],
  imports: [
    BrowserModule,
    // 1 Importar FormsModule ngModel Es una directiva angular válida pero no está disponible por defecto.
    // Pertenece al FormsModule opcional y debe optar por ese módulo para usarlo.
    FormsModule,
    AppRoutingModule,
    // 6 / Habilitar servicios HTTP
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot( // El método de configuración forRoot() toma una clase InMemoryDataService eso prepara la base de datos en memoria.
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  //providers: [ // no need to place any providers due to the `providedIn` flag...
  //],
  bootstrap: [AppComponent]
})
export class AppModule { }

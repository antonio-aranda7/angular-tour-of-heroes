import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 1 Importar FormsModule ngModel Es una directiva angular válida pero no está disponible por defecto.
// Pertenece al FormsModule opcional y debe optar por ese módulo para usarlo.
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    // 1 Importar FormsModule ngModel Es una directiva angular válida pero no está disponible por defecto.
    // Pertenece al FormsModule opcional y debe optar por ese módulo para usarlo.
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 5 Agregar navegación en la aplicación con enrutamiento / Agregar el AppRoutingModule
// Resultado del comando - ng generate module app-routing --flat --module=app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 4 / Agregar el AppRoutingModule
import { RouterModule, Routes } from '@angular/router';

  // 5 / Agregar la ruta del tablero(dashboard)
import { DashboardComponent } from './dashboard/dashboard.component';
// 4 / Agregar el AppRoutingModule
import { HeroesComponent } from './heroes/heroes.component';//  le dará al enrutador un lugar adonde ir una vez que configure las rutas.
// 5 / Agregar una ruta detalle del héroe
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


// 4 Agregar el AppRoutingModule
const routes: Routes = [
//Una Ruta típica de Angular tiene dos propiedades:
//path: una cadena que coincide con la URL en la barra de direcciones del navegador.
//componet: el componente que el enrutador debe crear al navegar a esta ruta
  // 5 / Agregar una ruta predeterminada
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Cuando se inicia la aplicación, la barra de direcciones del navegador apunta a la raíz del sitio web. Eso no coincide con ninguna ruta existente, por lo que el enrutador no navega a ninguna parte. El espacio debajo de <router-outlet> está en blanco. Para que la aplicación navegue al panel de control automáticamente, agreaga la siguiente ruta a la matriz AppRoutingModule.Routes.
  // 5 / Agregar la ruta del tablero(dashboard)
  { path: 'dashboard', component: DashboardComponent },
  // 5 / Agregar una ruta detalle del héroe
  { path: 'detail/:id', component: HeroDetailComponent }, // Los dos puntos (:) en el path indican que : id es un marcador de posición para un id de héroe específico.
  // 4 Agregar el AppRoutingModule
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  //declarations: [],
  imports: [
    // 4 Agregar el AppRoutingModule
    RouterModule.forRoot(routes)// agrega el RouterModule a la matriz AppRoutingModule importa y lo configura con las rutas en un solo paso llamando RouterModule.forRoot():
    //CommonModule
    
  ],
  // 4 Agregar el AppRoutingModule
  exports: [RouterModule]
})
export class AppRoutingModule { }

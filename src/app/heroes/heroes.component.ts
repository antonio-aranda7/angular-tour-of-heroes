// 1 Resultado del comando ng generate component heroes
import { Component, OnInit } from '@angular/core';
// 1 Crear interfaz de héroe
import { Hero } from '../hero';
// 2 / Mostrando héroes
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // 1 Agrega la propiedad hero
  //hero = 'Windstorm';
  
  // 1 Crear interfaz de héroe
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // 2 / Mostrando héroes
  heroes = HEROES; // una propiedad de componente llamada heroes para exponer la HEROES matriz para la vinculación.
  // 2 / Agregar el controlador de eventos de clic
  selectedHero: Hero; 

  constructor() {

  }

  ngOnInit(): void { // El ngOnInit() es un gancho de ciclo de vida ("lifecycle hook") . Angular llama a ngOnInit() inmediatamente después de crear el componente. Adecuado para poner la lógica de inicialización.
  }
  // 2 Agregar el controlador de eventos de clic
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

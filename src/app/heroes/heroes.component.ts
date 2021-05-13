// 1 Resultado del comando ng generate component heroes
import { Component, OnInit } from '@angular/core';
// 1 Crear interfaz de héroe
import { Hero } from '../hero';

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

  constructor() {

  }

  ngOnInit(): void { // El ngOnInit() es un gancho de ciclo de vida ("lifecycle hook") . Angular llama a ngOnInit() inmediatamente después de crear el componente. Adecuado para poner la lógica de inicialización.


  }

}

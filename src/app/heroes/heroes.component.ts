// 1 Resultado del comando ng generate component heroes
import { Component, OnInit } from '@angular/core';
// 1 Crear interfaz de héroe
import { Hero } from '../hero';
// 2 / Mostrando héroes
import { HEROES } from '../mock-heroes';
// 4 / Actualizar HeroesComponent
import { HeroService } from '../hero.service';
// 4 / Agregar mensajes adicionales al servicio de héroe
import { MessageService } from '../message.service';


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
  //heroes = HEROES; // una propiedad de componente llamada heroes para exponer la HEROES matriz para la vinculación.
  // 2 / Agregar el controlador de eventos de clic
  selectedHero: Hero; 
  // 4 / Actualizar HeroesComponent
  heroes: Hero[];

  constructor(/*4/Actualizar HeroesComponent*/private heroService: HeroService, /*4/*/private messageService: MessageService) {

  }

  ngOnInit(): void { // El ngOnInit() es un gancho de ciclo de vida ("lifecycle hook") . Angular llama a ngOnInit() inmediatamente después de crear el componente. Adecuado para poner la lógica de inicialización.
    // 4 / Llamarlo en ngOnInit()
    this.getHeroes();
  }
  // 2 Agregar el controlador de eventos de clic
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // 4 / Agregar mensajes adicionales al servicio de héroe
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  // 4 / Añadir getHeroes()
  getHeroes(): void {
    
    this.heroService.getHeroes()
        // 4 / Suscríbirse en HeroesComponent
        .subscribe(heroes => this.heroes = heroes); //  pasa el arreglo emitida a la devolución de llamada, que establece la propiedad 'heroes' del componente.
  }

}

// 4 Agregar una vista de panel
// Resultado del comando - ng generate component dashboard
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(/*4/ */private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      // 5 / Agregar una vista de panel Este getHeroes() devuelve la lista dividida de héroes en las posiciones 1 y 5, devolviendo solo cuatro de los mejores héroes
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}

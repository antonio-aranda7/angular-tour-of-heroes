// 3 Crear un componente de características / Crear HeroDetailComponent
// resultado del comando ng generate component hero-detail 
import { Component, OnInit, /*3 / Añadir la propiedad @Input() al héroe */ Input  } from '@angular/core';
// 3 / Añadir la propiedad @Input() al héroe
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 3 / Añadir la propiedad @Input() al héroe
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}

// 3 Crear un componente de características / Crear HeroDetailComponent
// resultado del comando ng generate component hero-detail 
import { Component, OnInit, /*3 / Añadir la propiedad @Input() al héroe */ Input  } from '@angular/core';
// 5 / HeroDetailComponent enrutable
import { ActivatedRoute } from '@angular/router'; // El ActivatedRoute contiene información sobre la ruta a esta instancia del HeroDetailComponent. Este componente está interesado en los parámetros de la ruta extraídos de la URL. El parámetro "id" es el id del héroe que se mostrará.
import { Location } from '@angular/common'; // La ubicación es un servicio Angular para interactuar con el navegador. Lo usarás más tarde para volver a la vista que navegó aquí.

// 3 / Añadir la propiedad @Input() al héroe
import { Hero } from '../hero';
// 5 / HeroDetailComponent enrutable
import { HeroService } from '../hero.service'; // El HeroService obtiene los datos del héroe del servidor remoto y este componente lo usará para mostrar el héroe.

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 3 / Añadir la propiedad @Input() al héroe
  @Input() hero: Hero;
  // 5 /
  //hero: Hero;

  constructor(
    // 5 / HeroDetailComponent enrutable
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // 5 / Extrae el parámetro de ruta id

    this.getHero();
  }

  // 5 / Extrae el parámetro de ruta id
  getHero(): void {
    // El operador JavaScript (+) convierte la cadena en un número, que es lo que debería ser un "id" de héroe.
    const id = +this.route.snapshot.paramMap.get('id'); // Route.snapshot es una imagen estática de la información de la ruta poco después de que se creó el componente.
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // 5 / Encuentra el camino de regreso
  goBack(): void { // la clase de componente que navega hacia atrás un paso en la pila de historial del navegador usando el servicio Location que inyectaste previamente.
    this.location.back();
  }
  // 6 /
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}

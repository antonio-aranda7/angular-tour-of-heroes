// 4 Agregar servicios / Crear el HeroService
// Resultado del Comando ng generate service hero
import { Injectable } from '@angular/core';

// 4 / Observable HeroService
import { Observable, of } from 'rxjs'; // simulará obtener datos del servidor con la función RxJS of().

// 4 / Obtener datos del héroe
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// 4 / Inyectar en el HeroService
import { MessageService } from './message.service';

@Injectable({ //El decorador acepta el objeto de metadatos de un servicio de la misma manera que el decorador para las clases de componentes.@Injectable()@Component()
  providedIn: 'root',
})
export class HeroService {

  constructor(/*4/Inyectar en el HeroService*/private messageService: MessageService) { }

  // 4 / Obtener datos del héroe 
  getHeroes(): /* 4/Observable HeroService*/Observable<Hero[]> { // devuelve un Observable <Hero[]> que emite un valor único, una matriz de héroes del cuerpo de la respuesta HTTP.
    // TODO: send the message _after_ fetching the heroes
    // 4 / Enviar un mensaje desde HeroService
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // of (HEROES) devuelve un Observable <Hero[]> que emite un valor único, el conjunto de héroes simulados.
  }
  // 5 / Agregar HeroService.getHero ()
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`); // las comillas invertidas (`) que definen un JavaScript plantilla literal para incrustar el id.
    return of(HEROES.find(hero => hero.id === id));
  }
}

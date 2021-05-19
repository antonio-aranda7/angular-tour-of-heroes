// 4 Agregar servicios / Crear el HeroService
// Resultado del Comando ng generate service hero
import { Injectable } from '@angular/core';
// 6 / Heroes y HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';

// 4 / Observable HeroService
import { Observable, of } from 'rxjs'; // simulará obtener datos del servidor con la función RxJS of().
// 6 /
import { catchError, map, tap } from 'rxjs/operators';

// 4 / Obtener datos del héroe
import { Hero } from './hero';
import { HEROES } from './mock-heroes'; // SIN USO
// 4 / Inyectar en el HeroService
import { MessageService } from './message.service';


@Injectable({ 
  //El decorador acepta el objeto de metadatos de un servicio de la misma manera que el decorador para las clases de componentes.@Injectable()@Component()
  providedIn: 'root',
})

export class HeroService {
  // 6 /
  private heroesUrl = 'api/heroes';  // URL to web api
  // 6 /
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    // 6 / Heroes y HTTP
    private http: HttpClient,
    //4/Inyectar en el HeroService
    private messageService: MessageService
    /** Log a HeroService message with the MessageService */
    /*private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
    }*/
  ) { }

  // 6 / GET heroes from the server 
  // 4 / Obtener datos del héroe 
  getHeroes(): 
  /* 4/Observable HeroService*/
  Observable<Hero[]> { // devuelve un Observable <Hero[]> que emite un valor único, una matriz de héroes del cuerpo de la respuesta HTTP.
    // TODO: send the message _after_ fetching the heroes
    // 4 / Enviar un mensaje desde HeroService
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // of (HEROES) devuelve un Observable <Hero[]> que emite un valor único, el conjunto de héroes simulados.
    // 6 /
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }
  // 6 /
  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }
  // 5 / Agregar HeroService.getHero ()
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`); // las comillas invertidas (`) que definen un JavaScript plantilla literal para incrustar el id.
    return of(HEROES.find(hero => hero.id === id));
    // 6 /
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  // 6 / ALL
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

import { Component } from '@angular/core';
import { PokemonModel } from 'src/shared/models/pokemon';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpXhrBackend } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Grow';

  getPokemon() {
    const httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    const pokemon = new PokemonModel(httpClient);
    pokemon.bringPokes();
  }

  findPokemon() {
    const filter = 'pidgeotto';
    const httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    const pokemon = new PokemonModel(httpClient);
    pokemon.filterPokes(filter)
  }
}

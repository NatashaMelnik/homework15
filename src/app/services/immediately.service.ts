import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// Несколько сервисов для запросов. Некоторые сразу, а некоторые по клику.
export class ImmediatelyService {
  planet4 = {
    name: 'Yavin IV',
    rotation_period: '24',
    orbital_period: '4818',
    diameter: '10200',
    climate: 'temperate, tropical',
    gravity: '1 standard',
    terrain: 'jungle, rainforests',
    surface_water: '8',
  };

  planet1 = {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
  };

  planet2 = {
    name: 'Alderaan',
    rotation_period: '24',
    orbital_period: '364',
    diameter: '12500',
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'grasslands, mountains',
    surface_water: '40'
  };

  planets = [this.planet2, this.planet4, this.planet1];

  public GetPlanets(): Array<object> {
    return this.planets;
  }

}

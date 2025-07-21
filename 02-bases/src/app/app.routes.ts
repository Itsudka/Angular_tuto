import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter';
import { HeroPageComponent } from './pages/hero/hero';
import { dragonBallComponent } from './pages/dragonball/dragonball';
import { dragonBallSuperComponent } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: dragonBallComponent
  },
  {
    path: 'dragonball-super',
    component: dragonBallSuperComponent
  },
  {
    path: '**',
    component: CounterComponent
  }

];

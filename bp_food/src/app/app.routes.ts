import { Routes } from '@angular/router';




export const routes: Routes = [

  {
    path: 'main-page',
    loadComponent: () => import('./bp_food/pages/main-page/main-page.component'),
    children: [
      {
        path: 'categories',
        loadComponent: () => import('./bp_food/pages/categories-page/categories-page.component'),
      },
      {
        path: 'home',
        loadComponent: () => import('./bp_food/pages/home-page/home-page.component'),
      },
      {
        path: 'recipe/:name',
        loadComponent: () => import('./bp_food/pages/recipe-pages/recipe-pages.component').then(m => m.default)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'main-page/home',
  }


];

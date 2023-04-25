import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home Page',
    loadComponent: () =>
      import('./app/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'personal',
    title: 'Personal Information',
    loadComponent: () =>
      import('./app/personal/personal.component').then(
        (c) => c.PersonalComponent
      ),
  },
  {
    path: 'name-list',
    title: 'Names',
    loadComponent: () =>
      import('./app/namecollector/name-list/name-list.component').then(
        (c) => c.NameListComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'name-list',
  },
];

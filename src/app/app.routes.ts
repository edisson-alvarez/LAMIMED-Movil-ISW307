import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'estudios',
    loadComponent: () => import('./estudios/estudios.page').then((m) => m.EstudiosPage),
  },
  {
    path: 'actualizar-estudios',
    loadComponent: () => import('./actualizar-estudios/actualizar-estudios.page').then((m) => m.ActualizarEstudiosPage),
  },
  {
    path: 'pulsacion-prolongada',
    loadComponent: () =>
      import('./pulsacion-prolongada/pulsacion-prolongada.page').then((m) => m.PulsacionProlongadaPage),
  },
  {
    path: 'zoom-estudios',
    loadComponent: () => import('./zoom-estudios/zoom-estudios.page').then((m) => m.ZoomEstudiosPage),
  },
  {
    path: 'menu-principal',
    loadComponent: () => import('./menu-principal/menu-principal.page').then((m) => m.MenuPrincipalPage),
  },
];

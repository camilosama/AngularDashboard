import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main',url: '/' },
        {titulo: 'ProgressBar',url: '/dashboard/progress' },
        {titulo: 'Grafiacas',url: '/dashboard/grafica1' },
        {titulo: 'Promesas',url: '/dashboard/promesas' },
        {titulo: 'Rxjs',url: '/dashboard/rxjs' },
        
      ]
    }
  ];

  constructor() { }
}

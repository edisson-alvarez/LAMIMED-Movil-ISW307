
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  homeOutline,
  flaskOutline,
  refreshOutline,
  fingerPrintOutline,
  searchOutline,
  calendarOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    RouterLink,
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonMenuToggle
  ]
})
export class AppComponent {

  constructor() {
    addIcons({
      homeOutline,
      flaskOutline,
      refreshOutline,
      fingerPrintOutline,
      searchOutline,
      calendarOutline
    });
  }
}
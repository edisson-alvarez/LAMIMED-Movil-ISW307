
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  IonButtons,
  IonMenuButton
} from '@ionic/angular';

@Component({
  selector: 'app-actualizar-estudios',
  templateUrl: './actualizar-estudios.page.html',
  styleUrls: ['./actualizar-estudios.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonRefresher,
    IonRefresherContent,
    IonButtons,
    IonMenuButton
  ]
})
export class ActualizarEstudiosPage {

  contador = 0;

  estudios = [
    'Examen micológico directo',
    'Cultivo de hongos',
    'Estudio micológico de uñas'
  ];

  actualizarEstudios(event: any): void {

    setTimeout(() => {

      this.contador++;

      this.estudios.unshift(
        'Nuevo estudio actualizado ' + this.contador
      );

      event.target.complete();

    }, 1000);

  }
}

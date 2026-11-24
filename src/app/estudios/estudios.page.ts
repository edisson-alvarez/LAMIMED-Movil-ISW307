
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
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonButtons,
  IonMenuButton
} from '@ionic/angular';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.page.html',
  styleUrls: ['./estudios.page.scss'],
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
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonButtons,
    IonMenuButton
  ]
})
export class EstudiosPage {

  estudios = [
    {
      id: 1,
      nombre: 'Examen micológico directo',
      descripcion: 'Análisis de muestra para observar hongos.'
    },
    {
      id: 2,
      nombre: 'Cultivo de hongos',
      descripcion: 'Estudio para identificar hongos en una muestra.'
    },
    {
      id: 3,
      nombre: 'Estudio micológico de uñas',
      descripcion: 'Evaluación de muestras de uñas.'
    }
  ];

  constructor() {}

  eliminarEstudio(id: number): void {
    this.estudios = this.estudios.filter(
      estudio => estudio.id !== id
    );
  }
}

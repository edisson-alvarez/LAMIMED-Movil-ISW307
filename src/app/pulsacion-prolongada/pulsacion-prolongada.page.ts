
import { Component, OnDestroy } from '@angular/core';
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
  IonButtons,
  IonMenuButton,
  IonAlert
} from '@ionic/angular';

@Component({
  selector: 'app-pulsacion-prolongada',
  templateUrl: './pulsacion-prolongada.page.html',
  styleUrls: ['./pulsacion-prolongada.page.scss'],
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
    IonButtons,
    IonMenuButton,
    IonAlert
  ]
})
export class PulsacionProlongadaPage implements OnDestroy {

  estudios = [
    'Examen micológico directo',
    'Cultivo de hongos',
    'Estudio micológico de uñas'
  ];

  estudioSeleccionado = '';

  mensaje = 'Mantén presionado un estudio para abrir el menú contextual.';

  mostrarMenuContextual = false;

  private temporizador: ReturnType<typeof setTimeout> | null = null;

  iniciarPulsacion(event: PointerEvent, estudio: string): void {

    this.cancelarPulsacion();

    this.temporizador = setTimeout(() => {

      this.estudioSeleccionado = estudio;

      this.mensaje = 'Estudio seleccionado: ' + estudio;

      this.mostrarMenuContextual = true;

      this.temporizador = null;

    }, 800);

  }

  cancelarPulsacion(): void {

    if (this.temporizador !== null) {

      clearTimeout(this.temporizador);

      this.temporizador = null;

    }

  }

  verInformacion(): void {

    this.mensaje =
      'Información del estudio: ' + this.estudioSeleccionado;

    this.mostrarMenuContextual = false;

  }

  marcarFavorito(): void {

    this.mensaje =
      'Agregado a favoritos: ' + this.estudioSeleccionado;

    this.mostrarMenuContextual = false;

  }

  cerrarMenu(): void {

    this.mostrarMenuContextual = false;

  }

  ngOnDestroy(): void {
    this.cancelarPulsacion();
  }
}

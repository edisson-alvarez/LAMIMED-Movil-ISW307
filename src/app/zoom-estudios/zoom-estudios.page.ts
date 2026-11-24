
import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/angular';

@Component({
  selector: 'app-zoom-estudios',
  templateUrl: './zoom-estudios.page.html',
  styleUrls: ['./zoom-estudios.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonButtons,
    IonMenuButton
  ]
})
export class ZoomEstudiosPage {

  escala: number = 1;

  private puntos = new Map<number, {
    x: number;
    y: number;
  }>();

  private distanciaInicial = 0;
  private escalaInicial = 1;

  private limitarEscala(valor: number): number {
    if (!Number.isFinite(valor)) {
      return 1;
    }

    return Math.min(3, Math.max(1, valor));
  }

  aumentarZoom(): void {
    this.escala = this.limitarEscala(
      this.escala + 0.25
    );
  }

  reducirZoom(): void {
    this.escala = this.limitarEscala(
      this.escala - 0.25
    );
  }

  restablecerZoom(): void {
    this.escala = 1;
    this.puntos.clear();
    this.distanciaInicial = 0;
    this.escalaInicial = 1;
  }

  private calcularDistancia(): number {
    const puntos = Array.from(this.puntos.values());

    if (puntos.length !== 2) {
      return 0;
    }

    const distancia = Math.hypot(
      puntos[0].x - puntos[1].x,
      puntos[0].y - puntos[1].y
    );

    return Number.isFinite(distancia) ? distancia : 0;
  }

  iniciarGesto(event: PointerEvent): void {

    if (event.pointerType !== 'touch') {
      return;
    }

    if (this.puntos.size >= 2) {
      return;
    }

    this.puntos.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY
    });

    if (this.puntos.size === 2) {
      this.distanciaInicial = this.calcularDistancia();
      this.escalaInicial = this.limitarEscala(this.escala);
    }
  }

  moverGesto(event: PointerEvent): void {

    if (!this.puntos.has(event.pointerId)) {
      return;
    }

    this.puntos.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY
    });

    if (
      this.puntos.size === 2 &&
      this.distanciaInicial > 0
    ) {

      const distanciaActual = this.calcularDistancia();

      if (distanciaActual > 0) {
        this.escala = this.limitarEscala(
          this.escalaInicial *
          (distanciaActual / this.distanciaInicial)
        );
      }
    }
  }

  terminarGesto(event: PointerEvent): void {

    this.puntos.delete(event.pointerId);

    if (this.puntos.size < 2) {
      this.distanciaInicial = 0;
      this.escalaInicial = this.limitarEscala(this.escala);
    }
  }
}

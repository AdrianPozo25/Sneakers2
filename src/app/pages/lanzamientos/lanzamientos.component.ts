import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  standalone: false,
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent {
  lanzamientos = [
    {
      nombre: 'Nike SB Dunk x Travis Scott',
      fecha: '2025-06-15',
      precio: 149.99,
      imagen: 'image/sbdunktravis.webp'
    },
    {
      nombre: 'Adidas Yeezy Boost 750',
      fecha: '2025-07-01',
      precio: 299.99,
      imagen: 'image/yezzy350.webp'
    }
  ];

  mostrarModal = false;
  lanzamientoSeleccionado: any = null;

  abrirConfirmacion(item: any) {
    this.lanzamientoSeleccionado = item;
    this.mostrarModal = true;
  }

  confirmarNotificacion() {
    this.mostrarModal = false;
    Swal.fire({
    icon: 'success',
    title: '¡Listo!',
    text: `Te notificaremos cuando salga "${this.lanzamientoSeleccionado.nombre}".`,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Aceptar'
  });
    this.lanzamientoSeleccionado = null;
  }

  cancelarNotificacion() {
    this.mostrarModal = false;
    this.lanzamientoSeleccionado = null;
  }
}

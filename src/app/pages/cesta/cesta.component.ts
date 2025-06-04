import { Component, OnInit } from '@angular/core';
import { CestaService } from '../../services/cesta.servicio/cesta.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cesta',
  standalone: false,
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  productosCesta: any[] = [];
  mostrarModalPago = false; // ✅ Esta línea va aquí, no dentro del decorador @Component

  constructor(private cestaService: CestaService, private router: Router) {}

  ngOnInit(): void {
    this.productosCesta = this.cestaService.obtenerCesta();
  }

  cambiarCantidad(id: number, cantidad: number) {
    this.cestaService.cambiarCantidad(id, cantidad);
    this.productosCesta = this.cestaService.obtenerCesta();
  }

  eliminarProducto(id: number) {
    this.cestaService.eliminarProducto(id);
    this.productosCesta = this.cestaService.obtenerCesta();
  }

  obtenerTotal() {
    return this.cestaService.obtenerTotal();
  }

  vaciarCesta() {
    this.cestaService.vaciarCesta();
    this.productosCesta = [];
  }

  pagar() {
    const total = this.cestaService.obtenerTotal();

    if (total > 0) {
      this.mostrarModalPago = true;

      setTimeout(() => {
        const paypalDiv = document.getElementById('paypal-button-container');
        if (paypalDiv) {
          paypalDiv.innerHTML = ''; // limpia botón anterior

          // @ts-ignore
          paypal.Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: total.toString()
                  }
                }]
              });
            },
            onApprove: (data: any, actions: any) => {
              return actions.order.capture().then((details: any) => {
                Swal.fire(
                  'Pago completado',
                  `Gracias por tu compra, ${details.payer.name.given_name}`,
                  'success'
                );
                this.vaciarCesta();
                this.mostrarModalPago = false;
              });
            },
            onError: () => {
              Swal.fire('Error', 'Hubo un problema con el pago.', 'error');
              this.mostrarModalPago = false;
            }
          }).render('#paypal-button-container');
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "No puedes pagar una cesta vacía.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#d97e42",
      });
    }
  }

  cerrarModalPago() {
    this.mostrarModalPago = false;
  }

  irAlCatalogo() {
    this.router.navigate(['/catalogo']);
  }
}

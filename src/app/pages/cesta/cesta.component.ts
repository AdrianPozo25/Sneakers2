import { Component, OnInit } from '@angular/core';
import { CestaService } from '../../services/cesta.servicio/cesta.service'; // Servicio para gestionar la cesta
import { Router } from '@angular/router'; // Servicio para la navegación
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-cesta', // Selector del componente para ser usado en el HTML
  standalone: false, // Indica que este componente no es autónomo y depende de un módulo
  templateUrl: './cesta.component.html', // Ruta del archivo de la plantilla HTML
  styleUrls: ['./cesta.component.css'] // Ruta del archivo de estilos CSS
})
export class CestaComponent implements OnInit {
  productosCesta: any[] = []; // Array que almacena los productos añadidos a la cesta

  // Inyectamos el servicio de la cesta y el enrutador
  constructor(private cestaService: CestaService, private router: Router) {}

  /**
   * Método que se ejecuta cuando el componente se inicializa.
   * Carga los productos almacenados en la cesta desde el servicio.
   */
  ngOnInit(): void {
    this.productosCesta = this.cestaService.obtenerCesta();
  }

  /**
   * Cambia la cantidad de un producto en la cesta.
   * @param id - ID del producto
   * @param cantidad - Nueva cantidad del producto
   */
  cambiarCantidad(id: number, cantidad: number) {
    this.cestaService.cambiarCantidad(id, cantidad); // Llamamos al servicio para actualizar la cantidad
    this.productosCesta = this.cestaService.obtenerCesta(); // Actualizamos la vista con los datos actualizados
  }

  /**
   * Elimina un producto de la cesta.
   * @param id - ID del producto a eliminar
   */
  eliminarProducto(id: number) {
    this.cestaService.eliminarProducto(id); // Eliminamos el producto usando el servicio
    this.productosCesta = this.cestaService.obtenerCesta(); // Actualizamos la vista
  }

  /**
   * Calcula el total de la compra sumando los precios de los productos en la cesta.
   * @returns Total en euros (€)
   */
  obtenerTotal() {
    return this.cestaService.obtenerTotal();
  }

  /**
   * Vacía completamente la cesta de compras.
   */
  vaciarCesta() {
    this.cestaService.vaciarCesta(); // Llamamos al servicio para vaciar la cesta
    this.productosCesta = []; // Vaciamos la lista de productos en la vista
  }

  /**
   * Simula el proceso de pago, verificando si la cesta tiene productos.
   * Si hay productos, muestra una alerta con el total y redirige a una pasarela de pago.
   */
  pagar() {
    const total = this.cestaService.obtenerTotal(); // Obtenemos el total de la compra

    if (total > 0) {
      //  Si el total es mayor a 0, mostramos una alerta de confirmación
      Swal.fire({
        title: "Redirigiendo al pago...", // Título de la alerta
        text: `Vas a pagar ${total}€`, // Mensaje con el total a pagar
        icon: "success", // Icono de éxito
        confirmButtonText: "Continuar", // Texto del botón de confirmación
        confirmButtonColor: "#d97e42", // Color del botón de confirmación
        showCancelButton: true, // Muestra el botón de cancelar
        cancelButtonText: "Cancelar", // Texto del botón de cancelar
        cancelButtonColor: "#b85e30", // Color del botón de cancelar
      }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma, redirige a la pasarela de pago (PayPal en este caso)
          window.location.href = "https://www.paypal.com/checkout";
        }
      });
    } else {
      //  Si la cesta está vacía, mostramos una alerta de error
      Swal.fire({
        title: "Error",
        text: "No puedes pagar una cesta vacía.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#d97e42",
      });
    }
  }

  /**
   * Redirige al usuario al catálogo de productos.
   */
  irAlCatalogo() {
    this.router.navigate(['/catalogo']); // Navega a la ruta '/catalogo'
  }
}

import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  private cesta: any[] = []; // Array donde se almacenan los productos

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.cargarCesta(); // Cargar la cesta cuando se inicializa el servicio
  }

  // Guardar en localStorage (solo si está en el navegador)
  private guardarCesta() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cesta', JSON.stringify(this.cesta));
    }
  }

  // Cargar la cesta desde localStorage (solo si está en el navegador)
  private cargarCesta() {
    if (isPlatformBrowser(this.platformId)) {
      const datosGuardados = localStorage.getItem('cesta');
      if (datosGuardados) {
        this.cesta = JSON.parse(datosGuardados);
      }
    }
  }

  // Obtener todos los productos en la cesta
  obtenerCesta() {
    return this.cesta;
  }

  // Agregar producto a la cesta
  agregarProducto(producto: any) {
    const existe = this.cesta.find(item => item.id === producto.id);
    if (existe) {
      existe.cantidad += 1;
    } else {
      this.cesta.push({ ...producto, cantidad: 1 });
    }
    this.guardarCesta(); // Guardar cambios en localStorage
  }

  // Cambiar cantidad de un producto
  cambiarCantidad(id: number, cantidad: number) {
    const producto = this.cesta.find(item => item.id === id);
    if (producto) {
      producto.cantidad += cantidad;
      if (producto.cantidad <= 0) {
        this.eliminarProducto(id);
      }
    }
    this.guardarCesta(); // Guardar cambios
  }

  // Eliminar un producto de la cesta
  eliminarProducto(id: number) {
    this.cesta = this.cesta.filter(item => item.id !== id);
    this.guardarCesta();
  }

  // Vaciar toda la cesta
  vaciarCesta() {
    this.cesta = [];
    this.guardarCesta();
  }

  // Obtener el total de la compra
  obtenerTotal() {
    return this.cesta.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CestaService } from '../../services/cesta.servicio/cesta.service'; 
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ProductDescriptionService } from '../../services/product-description.service'; 




@Component({
  selector: 'app-detalles-producto',
  standalone: false,
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {
  producto: any; // Variable para almacenar los detalles del producto seleccionado
  imagenActualIndex: number = 0; // Índice de la imagen actual en el carrusel
  transicionActiva: boolean = false; // Variable para controlar la animación de transición
  autoSlide: any; // Intervalo para el auto-slide de imágenes
  descripcion: string = 'Cargando descripción...'; // Mensaje de carga para la descripción del producto


  productos = [
    {
      id: 1, 
      nombre: 'Jordan 1 Retro High OG', 
      precio: 539.99, 
      talla: '42', 
      color: 'Marrón/Negro',
      imagenes: ['image/travisfondoblanco.jpg', 'image/travisfondoblanco2.jpg'],
    },
    {
      id: 2, 
      nombre: 'Asics Kayano 14', 
      precio: 159.99, 
      talla: '44', 
      color: 'Blanco/Azul',
      imagenes: ['image/kayano14.jpg', 'image/kayano142.jpg'],
    },
    {
      id: 3, 
      nombre: 'Maison Mihara Yasuhiro', 
      precio: 249.99, 
      talla: '43', 
      color: 'Negro/Blanco',
      imagenes: ['image/maison.png', 'image/maison2.png'],
    },
    {
      id: 4, 
      nombre: 'Yeezy Foam Runner', 
      precio: 59.99, 
      talla: '42', 
      color: 'Arena',
      imagenes: ['image/yeezyfoamrunner.jpg', 'image/yeezyfoamrunner2.jpg'],
    },
    { id: 5, 
      nombre: 'Nike Dunk Low Panda', 
      precio: 149.99, 
      talla: '42', 
      color: 'Blanco/Negro',
      imagenes: ['image/panda1.png', 'image/panda2.png'] 
    },

    { id: 6, 
      nombre: 'New Balance 1906R', 
      precio: 129.99, 
      talla: '42', 
      color: 'Gris/Blanco',
      imagenes: ['image/nb1906.jpg', 'image/nb19062.jpg'] },

    { id: 7, 
      nombre: 'Air Max 95 x Corteiz', 
      precio: 179.99, 
      talla: '42', 
      color: 'Negro/Azul',
      imagenes: ['image/corteizblue.jpg', 'image/corteizblue2.jpg'] },

    { id: 8, nombre: 'Dior B30', 
      precio: 899.99, 
      talla: '42', 
      color: 'Negro/Plata',
      imagenes: ['image/b30black.jpg', 'image/b30black2.jpg'] },

    { id: 9, 
      nombre: 'Adidas Samba OG', 
      precio: 109.99, 
      talla: '42', 
      color: 'Blanco/Negro',
      imagenes: ['image/samba.webp', 'image/samba2.webp'] },

    { id: 10, 
      nombre: 'Salomon XT-6', 
      precio: 169.99, 
      talla: '42', 
      color: 'Gris/Negro',
      imagenes: ['image/salomon.jpg', 'image/salomon2.jpg'] },

    { id: 11, 
      nombre: 'Puma MB.02 Lamelo Ball', 
      precio: 79.99, 
      talla: '42', 
      color: 'Rosa/Negro',
      imagenes: ['image/melo.webp', 'image/melo2.webp'] },

    { id: 12, 
      nombre: 'Converse Chuck 70 CDG', 
      precio: 189.99, 
      talla: '42', 
      color: 'Azul/Negro',
      imagenes: ['image/cdg.webp', 'image/cdg2.webp'] },

      { 
        id: 13, 
        nombre: 'Balenciaga Track', 
        precio: 899.99, 
        talla: '42', 
        color: 'Negro', 
        imagenes: ['image/balen.jpg', 'image/balen2.jpg'] 
      },
      
      { 
        id: 14, 
        nombre: 'Nike Air Force 1', 
        precio: 119.99, 
        talla: '42', 
        color: 'Blanco', 
        imagenes: ['image/af1.jpg', 'image/af12.jpg'] 
      },
      
      { 
        id: 15, 
        nombre: 'Jordan 4 Retro', 
        precio: 299.99, 
        talla: '42', 
        color: 'Blanco/Verde', 
        imagenes: ['image/j4.avif', 'image/j42.avif'] 
      },
      
      { 
        id: 16, 
        nombre: 'Vans Old Skool x Fear of God', 
        precio: 75.99, 
        talla: '42', 
        color: 'Blanco/Negro', 
        imagenes: ['image/vans.webp', 'image/vans2.webp'] 
      },
      
      { 
        id: 17, 
        nombre: 'Nike Blazer Mid 77', 
        precio: 119.99, 
        talla: '42', 
        color: 'Blanco/Gris', 
        imagenes: ['image/blaz.avif', 'image/blaz2.avif'] 
      },
      
      { 
        id: 18, 
        nombre: 'Off-White x Nike Dunk', 
        precio: 650.00, 
        talla: '42', 
        color: 'Gris/Naranja', 
        imagenes: ['image/off.jpg', 'image/off2.jpg'] 
      },
      
      { 
        id: 19, 
        nombre: 'New Balance 990 V5', 
        precio: 199.99, 
        talla: '42', 
        color: 'Gris', 
        imagenes: ['image/nb990.avif', 'image/nb9902.avif'] 
      },

      { 
        id: 20, 
        nombre: 'Rick Owens Jumbo', 
        precio: 999.99, 
        talla: '42', 
        color: 'Negro/Blanco', 
        imagenes: ['image/ro.jpg', 'image/ro2.jpg'] 
      }
];

constructor(
  private route: ActivatedRoute, // Para obtener el ID del producto desde la URL
  private cestaService: CestaService, // Servicio para gestionar la cesta de compras
  private productDescriptionService: ProductDescriptionService // Servicio para obtener la descripción del producto
) {} 

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id')); // Obtener el ID del producto desde la URL
  this.producto = this.productos.find(prod => prod.id === id); // Buscar el producto en la lista
  if (!this.producto) return; // Si no se encuentra, salir

  // Obtener la descripción del producto desde una API simulada (Fake API)
  this.productDescriptionService.obtenerDescripcionProducto(id).subscribe(
    (data) => {
      this.descripcion = data.descripcion || 'Descripción no disponible.'; // Asignar la descripción recibida
    },
    (error) => {
      console.error('Error al obtener la descripción:', error);
      this.descripcion = 'No se pudo obtener la descripción.'; // Mensaje de error en caso de fallo
    }
  );

  // Iniciar el auto-slide si el producto tiene más de una imagen
  if (this.producto.imagenes.length > 1) {
    this.iniciarAutoSlide();
  }
}

// Método para cambiar la imagen en el carrusel
cambiarImagen(direccion: number) {
  this.transicionActiva = true;
  setTimeout(() => {
    const totalImagenes = this.producto.imagenes.length;
    this.imagenActualIndex = (this.imagenActualIndex + direccion + totalImagenes) % totalImagenes; // Cambio cíclico de imágenes
    this.transicionActiva = false;
  }, 300); 
  
  this.reiniciarAutoSlide(); // Reiniciar el auto-slide tras cambiar de imagen manualmente
}

// Método para seleccionar directamente una imagen del carrusel
seleccionarImagen(index: number) {
  this.transicionActiva = true;
  setTimeout(() => {
    this.imagenActualIndex = index;
    this.transicionActiva = false;
  }, 300);

  this.reiniciarAutoSlide(); // Reiniciar el auto-slide tras selección manual
}

// Iniciar el auto-slide de imágenes
iniciarAutoSlide() {
  this.autoSlide = setInterval(() => {
    this.cambiarImagen(1); // Cambiar automáticamente cada 4 segundos
  }, 4000);
}

// Reiniciar el auto-slide tras interacción del usuario
reiniciarAutoSlide() {
  clearInterval(this.autoSlide);
  setTimeout(() => this.iniciarAutoSlide(), 5000); // Reiniciar después de 5 segundos de inactividad
}

// Método para añadir el producto a la cesta de compras
agregarACesta() {
  this.cestaService.agregarProducto(this.producto); // Llamar al servicio de la cesta
  console.log('Producto añadido a la cesta:', this.producto);

  // Mostrar notificación con SweetAlert2
  Swal.fire({
    icon: 'success',
    title: '¡Añadido!',
    text: 'El producto ha sido añadido a tu cesta.',
    confirmButtonColor: '#d97e42',
    confirmButtonText: 'OK'
  });
}
}

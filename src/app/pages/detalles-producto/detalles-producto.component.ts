import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CestaService } from '../../services/cesta.servicio/cesta.service'; 
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';




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

  tallaSeleccionada = '';
  colorSeleccionado = '';


  productos = [
    {
      id: 1, 
      nombre: 'Jordan 1 Retro High OG', 
      precio: 539.99, 
      tallas: [42, 43, 46], 
      colores: ['Marrón/Negro', 'Azul/Blanco'],
      imagenes: ['image/travisfondoblanco.jpg', 'image/travisfondoblanco2.jpg'],
      descripcion: 'Un clásico atemporal del baloncesto y la moda urbana, este modelo combina cuero de alta calidad con el icónico diseño de la primera zapatilla de Michael Jordan. Su silueta versátil y su comodidad lo convierten en un imprescindible para coleccionistas y sneakerheads.'
      
    },
    {
      id: 2, 
      nombre: 'Asics Kayano 14', 
      precio: 159.99, 
      tallas: [42, 44,45, 46], 
      colores: ['Blanco', 'Rojo'],
      imagenes: ['image/kayano14.jpg', 'image/kayano142.jpg'],
      descripcion: 'Una zapatilla de running con tecnología GEL, diseñada para ofrecer máxima estabilidad y amortiguación. Su estética retro y materiales de alta durabilidad la han convertido en un referente tanto en el mundo deportivo como en el streetwear.'
    },
    {
      id: 3, 
      nombre: 'Maison Mihara Yasuhiro', 
      precio: 249.99, 
      tallas: [42, 43, 47], 
      colores: ['Negro', 'Blanco'],
      imagenes: ['image/maison.png', 'image/maison2.png'],
      descripcion: 'Conocida por su enfoque vanguardista y suela exagerada, esta silueta reinventa el diseño clásico de zapatillas con un toque artesanal. Su apariencia desgastada y detalles únicos la convierten en una pieza de arte dentro del mundo del calzado.'
    },
    {
      id: 4, 
      nombre: 'Yeezy Foam Runner', 
      precio: 59.99, 
      tallas: [40, 41, 43, 45, 46], 
      colores: ['Arena', 'Negro'],
      imagenes: ['image/yeezyfoamrunner.jpg', 'image/yeezyfoamrunner2.jpg'],
      descripcion: 'Una de las creaciones más innovadoras de Kanye West, estas zapatillas sin cordones y de estructura hueca están hechas de una mezcla de algas y espuma EVA. Su diseño futurista y comodidad extrema las han convertido en un éxito instantáneo.'
    },
    { id: 5, 
      nombre: 'Nike Dunk Low Panda', 
      precio: 149.99, 
      tallas: [40, 42, 44, 45], 
      colores: ['Negro'],
      imagenes: ['image/panda1.png', 'image/panda2.png'],
      descripcion: 'Con su esquema de colores en blanco y negro, esta versión de los Dunk Low es una de las más populares por su versatilidad y estilo minimalista. Su diseño limpio y materiales resistentes la hacen ideal para el uso diario.'
    },

    { id: 6, 
      nombre: 'New Balance 1906R', 
      precio: 129.99, 
      tallas: [42, 43, 46], 
      colores: ['Beige', 'Negro'],
      imagenes: ['image/nb1906.jpg', 'image/nb19062.jpg'],
      descripcion: 'Inspirada en los modelos de running de los 2000, esta zapatilla destaca por su tecnología de amortiguación ABZORB y su estética retrofuturista. Es una opción cómoda y funcional tanto para la moda casual como para el deporte.'
   },

    { id: 7, 
      nombre: 'Air Max 95 x Corteiz', 
      precio: 179.99, 
      tallas: [40, 44], 
      colores: ['Azul/Negro', 'Camuflaje'],
      imagenes: ['image/corteizblue.jpg', 'image/corteizblue2.jpg'], 
      descripcion: 'Un modelo colaborativo que mezcla la icónica silueta del Air Max 95 con la identidad callejera de la marca británica Corteiz. Su combinación de materiales premium y colores llamativos la hacen destacar en cualquier outfit.'
    },
      

    { id: 8, nombre: 'Dior B30', 
      precio: 899.99, 
      tallas: [42, 45], 
      colores: ['Negro', 'Blanco'],
      imagenes: ['image/b30black.jpg', 'image/b30black2.jpg'],
      descripcion: 'Una sneaker de lujo con diseño aerodinámico y detalles refinados. Su construcción con materiales de alta calidad y su estilo inspirado en el running la convierten en un símbolo de elegancia moderna.'
   },

    { id: 9, 
      nombre: 'Adidas Samba OG', 
      precio: 109.99, 
      tallas: [42, 46], 
      colores: ['Blanco/Negro', 'Azul/Blanco'],
      imagenes: ['image/samba.webp', 'image/samba2.webp'],
      descripcion: 'Una de las zapatillas más icónicas de Adidas, diseñada originalmente para el fútbol sala y convertida en un clásico del estilo urbano. Su combinación de cuero y gamuza, junto con su suela de goma, ofrece una estética vintage atemporal.'
   },

    { id: 10, 
      nombre: 'Salomon XT-6', 
      precio: 169.99, 
      tallas: [40, 43, 46], 
      colores: ['Blanco', 'Azul'],
      imagenes: ['image/salomon.jpg', 'image/salomon2.jpg'],
      descripcion: 'Diseñada para el trail running, esta zapatilla cuenta con tecnología de amortiguación ACS y suela Contagrip para máximo agarre. Su popularidad ha crecido en el mundo de la moda gracias a su estética técnica y funcional.'
   },

    { id: 11, 
      nombre: 'Puma MB.02 Lamelo Ball', 
      precio: 79.99, 
      tallas: [40, 43, 44, 45, 46, 47], 
      colores: ['Amarillo/Rosa', 'Verde/Rojo'],
      imagenes: ['image/melo.webp', 'image/melo2.webp'],
      descripcion: 'La segunda edición de la línea exclusiva de LaMelo Ball, con un diseño llamativo y una tecnología de amortiguación avanzada. Su combinación de colores vibrantes y construcción ligera la hacen perfecta para el baloncesto y el estilo casual.'
   },

    { id: 12, 
      nombre: 'Converse Chuck 70 CDG', 
      precio: 189.99, 
      tallas: [42, 43], 
      colores: ['Gris', 'Verde'],
      imagenes: ['image/cdg.webp', 'image/cdg2.webp'],
      descripcion: 'La colaboración entre Converse y Comme des Garçons ha dado como resultado una versión premium de las clásicas Chuck 70, con el icónico logo del corazón con ojos y materiales de mejor calidad para mayor durabilidad.' },

      { 
        id: 13, 
        nombre: 'Balenciaga Track', 
        precio: 899.99, 
        tallas: [40, 41, 44], 
        colores: ['Negro', 'Azul'], 
        imagenes: ['image/balen.jpg', 'image/balen2.jpg'],
        descripcion: 'Una zapatilla chunky de lujo con una construcción compleja de múltiples capas y un diseño agresivo. Su combinación de materiales técnicos y estética maximalista la han convertido en un referente de la moda contemporánea.' 
      },
      
      { 
        id: 14, 
        nombre: 'Nike Air Force 1', 
        precio: 119.99, 
        tallas: [42, 43,44, 45, 46], 
        colores: ['Blanco', 'Negro', 'Rojo'], 
        imagenes: ['image/af1.jpg', 'image/af12.jpg'],
        descripcion: 'Una de las zapatillas más reconocidas y usadas en el mundo, su diseño minimalista y suela Air la convierten en un básico del streetwear. Su versatilidad permite combinarla con prácticamente cualquier outfit.' 
      },
      
      { 
        id: 15, 
        nombre: 'Jordan 4 Retro', 
        precio: 299.99, 
        tallas: [ 43, 45], 
        colores: ['Blanco/Verde', 'Rojo/Blanco'], 
        imagenes: ['image/j4.avif', 'image/j42.avif'],
        descripcion: 'Con su diseño robusto y detalles icónicos como las alas laterales y la unidad Air visible, el Jordan 4 es un modelo legendario dentro de la línea de Michael Jordan. Su combinación de confort y estilo lo hace un favorito entre coleccionistas.' 
      },
      
      { 
        id: 16, 
        nombre: 'Vans Old Skool x Fear of God', 
        precio: 75.99, 
        tallas: [40,  45], 
        colores: ['Blanco/Negro'], 
        imagenes: ['image/vans.webp', 'image/vans2.webp'],
        descripcion: 'Esta colaboración entre Vans y Fear of God añade detalles premium a la clásica silueta Old Skool, incluyendo materiales de mejor calidad y un diseño con patrones exclusivos. Es un modelo muy buscado por los fans del streetwear.' 
      },
      
      { 
        id: 17, 
        nombre: 'Nike Blazer Mid 77', 
        precio: 119.99, 
        tallas: [40, 42, 44, 45], 
        colores: ['Gris', 'Blanco'], 
        imagenes: ['image/blaz.avif', 'image/blaz2.avif'] ,
        descripcion: 'Una zapatilla clásica con un diseño vintage que recuerda la época dorada del baloncesto. Su construcción en cuero y gamuza, junto con su suela de goma vulcanizada, la hacen una opción elegante y duradera.'
      },
      
      { 
        id: 18, 
        nombre: 'Off-White x Nike Dunk', 
        precio: 650.00, 
        tallas: [40, 43, 46], 
        colores: [ 'Blanco'], 
        imagenes: ['image/off.jpg', 'image/off2.jpg'] ,
        descripcion: 'Una de las colaboraciones más icónicas de Virgil Abloh, con un diseño desestructurado, detalles industriales y el característico sistema de doble cordón. Es una pieza de colección muy codiciada por los sneakerheads.'
      },
      
      { 
        id: 19, 
        nombre: 'New Balance 990 V5', 
        precio: 199.99, 
        tallas: [41, 42, 45], 
        colores: ['Gris', 'Blanco'], 
        imagenes: ['image/nb990.avif', 'image/nb9902.avif'],
        descripcion: 'Conocida por su confort y calidad premium, esta zapatilla hecha en EE.UU. es un referente en el mundo del calzado casual. Su diseño sencillo pero sofisticado la hace ideal tanto para la moda como para la funcionalidad.' 
      },

      { 
        id: 20, 
        nombre: 'Rick Owens Jumbo', 
        precio: 999.99, 
        tallas: [41, 43, 44], 
        colores: ['Negro'], 
        imagenes: ['image/ro.jpg', 'image/ro2.jpg'],
        descripcion: 'Una reinterpretación extrema de las zapatillas de skate con suela oversized y una estética avant-garde. Su diseño disruptivo y materiales de lujo la convierten en una pieza clave dentro del high fashion.' 
      }
];

constructor(
  private route: ActivatedRoute, // Para obtener el ID del producto desde la URL
  private cestaService: CestaService, // Servicio para gestionar la cesta de compras
) {} 

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id')); // Obtener el ID del producto desde la URL
  this.producto = this.productos.find(prod => prod.id === id); // Buscar el producto en la lista
  if (!this.producto) return; // Si no se encuentra, salir

  // Obtener la descripción del producto desde una API simulada (Fake API)
 

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

  this.reiniciarAutoSlide(); // Reiniciarel auto-slide tras selección manual
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
  if (!this.tallaSeleccionada || !this.colorSeleccionado) {
    Swal.fire({
      icon: 'warning',
      title: 'Selecciona talla y color',
      text: 'Debes seleccionar una talla y un color antes de añadir a la cesta.',
      confirmButtonColor: '#d97e42'
    });
    return;
  }

  const productoSeleccionado = {
    ...this.producto,
    tallaSeleccionada: this.tallaSeleccionada,
    colorSeleccionado: this.colorSeleccionado,
    cantidad: 1
  };

  this.cestaService.agregarProducto(productoSeleccionado);

  Swal.fire({
    icon: 'success',
    title: '¡Añadido!',
    text: 'Producto añadido a tu cesta.',
    confirmButtonColor: '#d97e42'
  });
}

}

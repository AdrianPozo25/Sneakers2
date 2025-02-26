import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  standalone: false, 
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  // Lista de productos con ID, imagen, nombre y precio
  productos = [
    { id: 1, nombre: 'Jordan 1 Retro High OG', precio: 539.99, imagen: '/image/travisfondoblanco.jpg' },
    { id: 2, nombre: 'Asics Kayano 14', precio: 159.99, imagen: '/image/kayano14.jpg' },
    { id: 3, nombre: 'Maison Mihara Yasuhiro', precio: 249.99, imagen: '/image/maison.png' },
    { id: 4, nombre: 'Yeezy Foam Runner', precio: 59.99, imagen: '/image/yeezyfoamrunner.jpg' },
    { id: 5, nombre: 'Nike Dunk Low Panda', precio: 149.99, imagen: '/image/panda1.png' },
    { id: 6, nombre: 'New Balance 1906 r', precio: 129.99, imagen: '/image/nb1906.jpg' },
    { id: 7, nombre: 'Air Max 95 x Corteiz', precio: 179.99, imagen: '/image/corteizblue.jpg' },
    { id: 8, nombre: 'Dior B30', precio: 899.99, imagen: '/image/b30black.jpg' },
    { id: 9, nombre: 'Adidas Samba OG', precio: 109.99, imagen: '/image/samba.webp' },
    { id: 10, nombre: 'Salomon XT-6', precio: 169.99, imagen: '/image/salomon.jpg' },
    { id: 11, nombre: 'Puma MB.02 Lamelo Ball', precio: 79.99, imagen: '/image/melo.webp' },
    { id: 12, nombre: 'Converse Chuck 70 CDG', precio: 189.99, imagen: '/image/cdg.webp' },
    { id: 13, nombre: 'Balenciaga Track', precio: 899.99, imagen: '/image/balen.jpg' },
    { id: 14, nombre: 'Nike Air Force 1', precio: 119.99, imagen: '/image/af1.jpg' },
    { id: 15, nombre: 'Jordan 4 Retro', precio: 299.99, imagen: '/image/j4.avif' },
    { id: 16, nombre: 'Vans Old Skool x Fear of God', precio: 75.99, imagen: '/image/vans.webp' },
    { id: 17, nombre: 'Nike Blazer Mid 77', precio: 119.99, imagen: '/image/blaz.avif' },
    { id: 18, nombre: 'Off-White x Nike Dunk', precio: 650.00, imagen: '/image/off.jpg' },
    { id: 19, nombre: 'New Balance 990 V5', precio: 199.99, imagen: '/image/nb990.avif' },
    { id: 20, nombre: 'Rick Owens Jumbo', precio: 999.99, imagen: '/image/ro.jpg' }
  ];
}

import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}

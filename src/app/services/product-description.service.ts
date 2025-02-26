import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductDescriptionService {
  private apiUrl = 'http://localhost:3000/productos'; // Ubicacion de la fake API

  constructor(private http: HttpClient) {}

  obtenerDescripcionProducto(productId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${productId}`);
  }
}

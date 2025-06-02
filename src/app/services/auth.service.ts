import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost/sneakers-backend';
  private sessionSubject = new BehaviorSubject<any>(null);
  session$ = this.sessionSubject.asObservable();

  constructor(private http: HttpClient) {
    const user = this.getUserSession();
    if (user) {
      this.sessionSubject.next(user);
    }
  }

  // Verificar si se ejecuta en el navegador
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Obtener sesión de usuario desde localStorage
  private getUserSession(): any | null {
    if (this.isBrowser()) {
      const user = localStorage.getItem('user');
      try {
        return user ? JSON.parse(user) : null;
      } catch (error) {
        console.error('Error al parsear el usuario:', error);
        return null;
      }
    }
    return null;
  }

  // Guardar sesión en localStorage y actualizar subject
  setSession(user: any) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
  }
  this.sessionSubject.next(user);
}

  // Cerrar sesión
  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('user');
    }
    this.sessionSubject.next(null);
  }

  // === API Calls ===

  // Login: espera un JSON con { status: 'success', user: {...} }
  login(credentials: any) {
    return this.http.post<any>(`${this.api}/login.php`, credentials);
  }

  register(user: any) {
    return this.http.post<any>(`${this.api}/register.php`, user);
  }
}

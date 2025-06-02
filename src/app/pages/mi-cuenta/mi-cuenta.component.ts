import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  standalone: false,
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  usuario: any = null;
  actividadReciente = ['Visto: Jordan 4 Retro', 'Añadido a cesta: Yeezy Boost 350'];
 nuevaContrasena: string = ''; // 👈 NECESARIA
  editandoNombre: boolean = false; // 👈 NECESARIA
  cambiosPendientes: boolean = false; // 👈 NECESARIA
  nombreOriginal: string = '';

onInputChange(): void {
  this.cambiosPendientes = true;
}


  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const userId = user.id;

      if (!userId) {
        console.error('No hay ID de usuario en localStorage');
        return;
      }

      this.http.get<any>(`http://localhost/sneakers-backend/get_user.php?id=${userId}`)
        .subscribe(data => {
          console.log('Usuario recibido:', data);
          if (data && !data.error) {
            this.usuario = data;
          } else {
            console.error(data.error || 'Error desconocido al cargar usuario');
          }
        });
    }
  }



editarNombre() {
  this.editandoNombre = true;
}

cancelarCambios() {
  this.usuario.username = this.nombreOriginal;
  this.nuevaContrasena = '';
  this.editandoNombre = false;
  this.editandoContrasena = false;
  this.cambiosPendientes = false;
}


  guardarCambios() {
  const payload = {
    id: this.usuario.id,
    username: this.usuario.username,
    password: this.nuevaContrasena || undefined
  };

  this.http.post<any>('http://localhost/sneakers-backend/update_user.php', payload)
    .subscribe(response => {
      if (response.status === 'success') {
        localStorage.setItem('user', JSON.stringify({ ...this.usuario }));
        Swal.fire({
       icon: 'success',
       title: '¡Guardado!',
        text: 'Cambios guardados correctamente.',
        confirmButtonColor: '#d33'
});

      } else {
        alert('Error al guardar los cambios: ' + response.message);
      }
      this.nuevaContrasena = '';
      this.cambiosPendientes = false;
    }, () => {
      Swal.fire({
  icon: 'success',
  title: '¡Guardado!',
  text: 'Cambios guardados correctamente.',
  confirmButtonColor: '#d33'
});

    });
}


editandoContrasena = false;

cambiarContrasena() {
  this.editandoContrasena = true;
}



activarPreferencias() {
  alert('Aquí irían tus preferencias personalizadas (futuro desarrollo).');
}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

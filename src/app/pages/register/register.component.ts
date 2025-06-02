import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe((res: any) => {
      if (res.status === 'success') {
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = res.message || 'Error al registrarse.';
      }
    }, () => {
      this.errorMessage = 'Ha ocurrido un error en el servidor.';
    });


    
  }
  isEmailValid(email: string): boolean {
    // Puedes añadir más dominios si quieres
    return /^[^\s@]+@(gmail\.com|outlook\.com|hotmail\.com)$/.test(email);
  }
  
}

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    if (!credentials.email || !credentials.password) {
      this.errorMessage = 'Por favor, rellena todos los campos.';
      return;
    }

    this.authService.login(credentials).subscribe(
      (res: any) => {
        if (res.status === 'success') {
          this.authService.setSession(res.user); // ¡res.user!
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = res.message || 'Error al iniciar sesión.';
        }
      },
      () => {
        this.errorMessage = 'Ha ocurrido un error en el servidor.';
      }
    );
  }
}

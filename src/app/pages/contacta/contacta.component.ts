import { Component } from '@angular/core';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-contacto', // Selector del componente para ser usado en el HTML
  standalone: false, // Indica que el componente forma parte de un módulo y no es independiente
  templateUrl: './contacta.component.html', // Ruta del archivo de la plantilla HTML
  styleUrls: ['./contacta.component.css'] // Ruta del archivo de estilos CSS
})
export class ContactaComponent {
  // Variables que almacenan los datos del formulario de contacto
  name: string = ''; // Nombre del usuario
  email: string = ''; // Email del usuario
  message: string = ''; // Mensaje del usuario

  /**
   * Función que se ejecuta cuando el usuario envía el formulario de contacto.
   */
  sendMessage() {
    // Verificamos si algún campo está vacío antes de enviar el mensaje
    if (!this.name || !this.email || !this.message) {
      //  Alerta de advertencia si hay campos sin completar
      Swal.fire({
        icon: 'warning', // Ícono de advertencia
        title: 'Campos incompletos', // Título de la alerta
        text: 'Por favor, rellena todos los campos antes de enviar el mensaje.', // Mensaje de advertencia
        confirmButtonColor: '#d97e42' // Color del botón de confirmación
      });
      return; // Detenemos la ejecución si hay campos vacíos
    }

    //  Alerta de éxito cuando el mensaje se ha enviado correctamente
    Swal.fire({
      icon: 'success', // Ícono de éxito
      title: 'Mensaje enviado', // Título de la alerta
      text: 'Tu mensaje ha sido enviado con éxito.', // Mensaje de confirmación
      confirmButtonColor: '#d97e42' // Color del botón de confirmación
    });

    // limpiar los campos después de enviar el mensaje
    this.name = '';
    this.email = '';
    this.message = '';
  }
}

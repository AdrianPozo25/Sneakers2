import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Declaración global para TypeScript que permite asignar funciones a `window`
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void; // Función que se ejecutará cuando la API de YouTube esté lista
    YT: any; // Referencia al objeto YT de la API de YouTube
  }
}

@Component({
  selector: 'app-home',
  standalone: false, // Indica que este componente no es autónomo y debe formar parte de un módulo
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // Inyección del identificador de la plataforma (servidor o navegador)
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    // Verifica si el código se está ejecutando en el navegador (para evitar errores en SSR - Server Side Rendering)
    if (isPlatformBrowser(this.platformId)) {
      this.loadYouTubeAPI(); // ✅ Carga la API de YouTube solo en el navegador
    }
  }

  /**
   * Carga el script de la API de YouTube dinámicamente y define la función
   * que será llamada cuando la API esté lista.
   */
  private loadYouTubeAPI(): void {
    // Verifica nuevamente si estamos en el navegador y si la API de YouTube aún no está cargada
    if (isPlatformBrowser(this.platformId) && !window.YT) {
      const script = document.createElement('script'); // Crea un elemento <script>
      script.src = 'https://www.youtube.com/iframe_api'; // URL de la API de YouTube
      script.async = true; // Carga asíncrona
      script.defer = true; // Retrasa la ejecución hasta que el HTML esté completamente analizado
      document.body.appendChild(script); // Agrega el script al DOM

      // Define la función que será llamada automáticamente cuando la API de YouTube esté lista
      window.onYouTubeIframeAPIReady = () => {
        this.initPlayers(); // ✅ Inicializa los reproductores de video cuando la API está lista
      };
    } else if (window.YT) { // Si la API ya está cargada, inicializa los reproductores de inmediato
      this.initPlayers();
    }
  }

  /**
   * Inicializa los reproductores en los contenedores "player1" y "player2".
   */
  private initPlayers(): void {
    // Verifica que estamos en el navegador y que la API de YouTube está disponible
    if (isPlatformBrowser(this.platformId) && window.YT) {
      // Crea un reproductor de YouTube en el contenedor con ID 'player1'
      new window.YT.Player('player1', {
        height: '360', // Altura del reproductor
        width: '640', // Ancho del reproductor
        videoId: 'L7cfqClWYNI', // ID del video de YouTube a cargar
        events: {
          'onReady': this.onPlayerReady, // Función llamada cuando el reproductor está listo
          'onStateChange': this.onPlayerStateChange // Función llamada cuando cambia el estado del reproductor
        }
      });

      // Crea otro reproductor de YouTube en el contenedor con ID 'player2'
      new window.YT.Player('player2', {
        height: '360',
        width: '640',
        videoId: 'QqLy3SFwo6M',
        events: {
          'onReady': this.onPlayerReady,
          'onStateChange': this.onPlayerStateChange
        }
      });
    }
  }

  /**
   * Función que se ejecuta cuando el reproductor está listo.
   */
  private onPlayerReady(event: any): void {
    console.log('El reproductor de YouTube está listo.');
    // event.target.playVideo(); // Descomentar si quieres que el video se reproduzca automáticamente
  }

  /**
   * Función que se ejecuta cuando el estado del reproductor cambia.
   */
  private onPlayerStateChange(event: any): void {
    console.log('Estado del reproductor cambió:', event.data);
  }
}

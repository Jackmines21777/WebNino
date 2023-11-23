import { Component, OnInit, OnDestroy } from '@angular/core';
import { AudioService } from './services/audio.service';
import { CronometroService } from './services/cronometro.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'WebNino';
  tiempoTranscurrido: number = 0;
  private suscripcion!: Subscription;

  constructor(private audioService: AudioService, private cronometroService: CronometroService){
  }


  ngOnInit() {
    this.audioService.play();

    this.suscripcion = this.cronometroService.tiempoTranscurrido$.subscribe(
      (tiempo) => (this.tiempoTranscurrido = tiempo)
    );

    this.cronometroService.iniciarCronometro(); // Inicia el cronómetro al iniciar el componente
  }

  ngOnDestroy() {
    this.cronometroService.detenerCronometro(); // Detén el cronómetro al salir del componente para evitar fugas de memoria
    this.suscripcion.unsubscribe();
  }
}

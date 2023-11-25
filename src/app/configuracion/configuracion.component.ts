import { Component } from '@angular/core';
import { CronometroService } from '../services/cronometro.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  tiempoTranscurrido: number = 0;
  private suscripcion: Subscription = new Subscription();

  constructor(private cronometroService: CronometroService) {}

  ngOnInit() {
    this.suscripcion = this.cronometroService.tiempoTranscurrido$.subscribe(
      (tiempo) => (this.tiempoTranscurrido = tiempo)
    );
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }
}
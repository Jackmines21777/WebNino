import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CronometroService {

 
  private tiempoTranscurridoSubject = new BehaviorSubject<number>(0);
  tiempoTranscurrido$ = this.tiempoTranscurridoSubject.asObservable();

  private cronometro: any;

  iniciarCronometro() {
    this.cronometro = setInterval(() => {
      this.tiempoTranscurridoSubject.next(this.tiempoTranscurridoSubject.value + 1);
    }, 1000);
  }

  detenerCronometro() {
    clearInterval(this.cronometro);
  }
}
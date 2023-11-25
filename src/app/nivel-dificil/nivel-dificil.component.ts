import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemoriaComponent } from '../memoria/memoria.component';
import { MensajeDivisionComponent } from '../mensajes/mensaje-division/mensaje-division.component';
import { MensajeMemoriaComponent } from '../mensajes/mensaje-memoria/mensaje-memoria.component';



@Component({
  selector: 'app-nivel-dificil',
  templateUrl: './nivel-dificil.component.html',
  styleUrls: ['./nivel-dificil.component.css']
})
export class NivelDificilComponent {
  @ViewChild('open') openButton!: ElementRef | undefined;
  @ViewChild('modal_container') modalContainer!: ElementRef | undefined;
  @ViewChild('close') closeButton!: ElementRef | undefined;

  constructor(public dialog: MatDialog){}

  openDialogMemoria(): void {
    this.dialog.open(MemoriaComponent, {
      width: '50%',
      height: '70%',
    });
  }

  openDialogMensajeMemoria(): void {
    this.dialog.open(MensajeMemoriaComponent, {
      width: '50%',
    }); 
  }
}

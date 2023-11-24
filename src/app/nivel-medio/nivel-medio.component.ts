import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MultiplicacionComponent } from '../multiplicacion/multiplicacion.component';
import { DivisionComponent } from '../division/division.component';
import { MensajeMultiplicacionComponent } from '../mensajes/mensaje-multiplicacion/mensaje-multiplicacion.component';
import { MensajeDivisionComponent } from '../mensajes/mensaje-division/mensaje-division.component';

@Component({
  selector: 'app-nivel-medio',
  templateUrl: './nivel-medio.component.html',
  styleUrls: ['./nivel-medio.component.css']
})
export class NivelMedioComponent {
  @ViewChild('open') openButton!: ElementRef | undefined;
  @ViewChild('modal_container') modalContainer!: ElementRef | undefined;
  @ViewChild('close') closeButton!: ElementRef | undefined;

  constructor(public dialog: MatDialog){}

  openDialogMultiplicacion(): void {
    this.dialog.open(MultiplicacionComponent, {
      width: '70%',
      height: '48%'
    });
  }
 
  openDialogDivision(): void {
    this.dialog.open(DivisionComponent, {
      width: '70%',
      height: '48%'
    });
  }

  openDialogMensajeMultiplicacion(): void {
    this.dialog.open(MensajeMultiplicacionComponent, {
      width: '70%',
    }); 
  }

  openDialogMensajeDivision(): void {
    this.dialog.open(MensajeDivisionComponent, {
      width: '70%',
    }); 
  }

}
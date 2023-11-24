
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MensajePadreComponent } from '../mensajes/mensaje-padre/mensaje-padre.component';
import { MensajeHijoComponent } from '../mensajes/mensaje-hijo/mensaje-hijo.component';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})

export class PerfilesComponent {

  constructor(public dialog: MatDialog){}

  openDialogMensajePadre(): void {
    this.dialog.open(MensajePadreComponent, {
      width: '70%',
    }); 
  }

  openDialogMensajeHijo(): void {
    this.dialog.open(MensajeHijoComponent, {
      width: '70%',
    }); 
  }
}

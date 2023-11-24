import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestaComponent } from '../resta/resta.component';
import { SumaComponent } from '../suma/suma.component';
import { MensajeSumaComponent } from '../mensajes/mensaje-suma/mensaje-suma.component';
import { MensajeRestaComponent } from '../mensajes/mensaje-resta/mensaje-resta.component';

@Component({
  selector: 'app-nivel-facil',
  templateUrl: './nivel-facil.component.html',
  styleUrls: ['./nivel-facil.component.css']
})
export class NivelFacilComponent {

  // @ViewChild('open') openButton!: ElementRef | undefined;
  // @ViewChild('modal_container') modalContainer!: ElementRef | undefined;
  // @ViewChild('close') closeButton!: ElementRef | undefined;

  constructor(public dialog: MatDialog){}

  openDialogSuma(): void {
    this.dialog.open(SumaComponent, {
      width: '70%',
    });
  }
 
  openDialogResta(): void {
    this.dialog.open(RestaComponent, {
      width: '70%',
    }); 
  }

  openDialogMensajeSuma(): void {
    this.dialog.open(MensajeSumaComponent, {
      width: '70%',
    }); 
  }

  openDialogMensajeResta(): void {
    this.dialog.open(MensajeRestaComponent, {
      width: '70%',
    }); 
  }


}

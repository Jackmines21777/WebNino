import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { SumaComponent } from '../suma/suma.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nivel-facil',
  templateUrl: './nivel-facil.component.html',
  styleUrls: ['./nivel-facil.component.css']
})
export class NivelFacilComponent {
  @ViewChild('open') openButton!: ElementRef | undefined;
  @ViewChild('modal_container') modalContainer!: ElementRef | undefined;
  @ViewChild('close') closeButton!: ElementRef | undefined;

  constructor(public dialog: MatDialog){}

  openDialog(): void {
    this.dialog.open(SumaComponent, {
      width: '70%',
      height: '46.5%'
    });
  }
}

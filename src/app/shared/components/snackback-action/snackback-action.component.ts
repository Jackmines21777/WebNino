import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSnackBarAction, MatSnackBarActions, MatSnackBarRef } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/_material/material/material.module';

@Component({
  selector: 'app-snackback-action',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  template: `
    <span class="example-pizza-party" matSnackBarLabel>
    repuesta correcta ¿Desea segir jugando?
    </span>
    <span matSnackBarActions>
      <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">OK</button>
    </span>
    <span matSnackBarActions>
      <button mat-button matSnackBarAction (click)="snackBarRef.dismiss()">NOP</button>
    </span>
  `,
  styleUrls: ['./snackback-action.component.css']
})
export class SnackbackActionComponent {

  snackBarRef = inject(MatSnackBarRef);

  
 }

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSnackBarAction, MatSnackBarActions, MatSnackBarRef } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/_material/material/material.module';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@Component({
  selector: 'app-snackback-action',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    SkeletonComponent
  ],
  template: `
    <span class="example-pizza-party" matSnackBarLabel>
    ¡Correcto!, ¡Sigue así!, ¿Vamos por más?
    </span>
    <span matSnackBarActions>
      <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">Sí, me leder</button>
    </span>
    <span matSnackBarActions>
      <button mat-button matSnackBarAction (click)="snackBarRef.dismiss()">Ahí noma'</button>
    </span>
  `,
  styleUrls: ['./snackback-action.component.css']
})
export class SnackbackActionComponent {

  snackBarRef = inject(MatSnackBarRef);

  
 }

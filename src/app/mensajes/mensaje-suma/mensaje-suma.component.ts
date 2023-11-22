import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mensaje-suma',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>mensaje-suma works!</p>`,
  styleUrls: ['./mensaje-suma.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MensajeSumaComponent { 

  //* Eres o no eres?

}

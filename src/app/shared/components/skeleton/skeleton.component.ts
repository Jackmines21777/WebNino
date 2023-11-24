import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="card">
    <div class="card__skeleton card__title"></div>
    <div class="card__skeleton card__description"></div>
  </div>
`,
  styleUrls: ['./skeleton.component.css'],
})
export class SkeletonComponent { }

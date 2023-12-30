import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>title works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent { }

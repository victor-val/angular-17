import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

/**
 * Sin el ChangeDetectionStrategy onPush el cambio en frameworkAsProperty lo mostraria
 * Con OnPush se necesita indicar cuando sucede el cambio
 * Con las signals se hace el update y se retorna nuevo objeto porque si no, no se aplicaria el cambio
 */
@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
     <app-title [title]="currentFramework()" />
    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor(){
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update( value => {
        value.name = 'React';
        return {...value};
      })
      console.log('Hecho');
    }, 3000);
  }
}

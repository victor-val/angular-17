import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Hola Mundo</h1>
  <section [ngClass]="['w-full h-[600px]', cssClass]">
    Heavy loader slow
  </section>
  `,

})
export class HeavyLoadersSlowComponent {

  @Input({required: true}) cssClass!: string; 

  constructor(){
    console.log("HeavyLoadersSlowComponent");
    const start = Date.now();
    while(Date.now() - start < 3000){ //Codigo bloqueante, tarda 3 seg en mostrar y dejar interaccionar
      console.log("Cargado")
    }
  }

}

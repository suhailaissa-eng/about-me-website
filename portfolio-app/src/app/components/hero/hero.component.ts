import { Component } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonsModule],
  template: `
    <div class="hero-container">
      <h1>Hello,</h1>
      <h1>My Name is</h1>
      <h1 class="main-name">Suhaila Issa</h1>
      <button kendoButton (click)="scrollTo('projects')">Portfolio</button>
    </div>
  `,
  styles: [`.hero-container { text-align:center; padding:50px; background-color:#222; color:white; } .main-name { font-size:3rem; color:pink; }`]
})
export class HeroComponent {
  scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); }
}
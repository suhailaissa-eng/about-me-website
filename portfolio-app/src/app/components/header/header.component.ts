import { Component } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { CommonModule } from '@angular/common';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonsModule,
ToolBarModule],
  template: `
    <kendo-toolbar>
      <div class="brand">
        <a (click)="scrollTo('hero')"><span>S</span>uhaila</a>
      </div>
      <button kendoButton (click)="toggleMenu()" class="hamburger">Menu</button>
      <div *ngIf="menuOpen">
        <button kendoButton (click)="scrollTo('hero')">Home</button>
        <button kendoButton (click)="scrollTo('services')">Services</button>
        <button kendoButton (click)="scrollTo('projects')">Projects</button>
        <button kendoButton (click)="scrollTo('about')">About</button>
        <button kendoButton (click)="scrollTo('contact')">Contact</button>
      </div>
    </kendo-toolbar>
  `,
  styles: [`.brand span { color: pink; font-weight: bold; } .hamburger { margin-left:auto; }`]
})
export class HeaderComponent {
  menuOpen = false;
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
}
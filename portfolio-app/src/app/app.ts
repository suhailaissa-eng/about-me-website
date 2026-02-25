import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector:'app-root',
  standalone:true,
  imports:[HeaderComponent, HeroComponent, ServicesComponent, ProjectsComponent, AboutComponent, ContactComponent],
  template:`
    <app-header></app-header>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-projects></app-projects>
    <app-about></app-about>
    <app-contact></app-contact>
  `
})
export class AppComponent {}
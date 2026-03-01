import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardComponent, GenericCard } from '../shared/generic-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, GenericCardComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = signal<GenericCard[]>([
    { title: 'Web & Mobile Apps', description: 'Building responsive web & mobile applications using Angular, Flutter, and more.' },
    { title: 'QA & Testing', description: 'Providing end-to-end testing solutions including automated and manual testing.' },
    { title: 'Big Data & Analytics', description: 'Designing data pipelines, dashboards, and analytics platforms.' }
  ]);
}
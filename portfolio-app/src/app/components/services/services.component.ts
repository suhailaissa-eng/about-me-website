import { Component, signal } from '@angular/core';
import { GenericCardComponent, GenericCard } from '../shared/generic-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, GenericCardComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = signal<GenericCard[]>([
    {
      title: 'Web & Mobile Apps',
      description: 'Building responsive and modern web & mobile applications using Angular, Flutter, and other frameworks.'
    },
    {
      title: 'QA & Testing',
      description: 'Providing end-to-end testing solutions including automated and manual testing for software quality assurance.'
    },
    {
      title: 'Big Data & Analytics',
      description: 'Designing data pipelines, dashboards, and analytics platforms for informed decision-making.'
    }
  ]);
}
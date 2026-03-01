import { Component, signal } from '@angular/core';
import { AboutCardComponent } from '../about-card/about-card.component';
import { CommonModule } from '@angular/common';

export interface AboutContent {
  title: string;
  subtitleSpan: string;
  subtitle: string;
  paragraphs: string[];
  resumeLink: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AboutCardComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  aboutContent = signal<AboutContent>({
    title: 'About',
    subtitleSpan: 'Me',
    subtitle: 'Software Engineering Student',
    paragraphs: [
      'I’m Suhaila, a passionate Software Engineering student with experience in Full-Stack Development, Mobile Apps, Big Data, Databases, and Quality Assurance.',
      'I focus on building clean, scalable solutions and continuously improving my technical skills.'
    ],
    resumeLink: 'assets/Suhaila.pdf'
  });
}
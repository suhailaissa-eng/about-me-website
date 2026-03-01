import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./about-card.component.html`,
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent {
  @Input() title!: string;
  @Input() subtitleSpan!: string;
  @Input() subtitle!: string;
  @Input() paragraphs!: string[];
  @Input() resumeLink?: string;
}
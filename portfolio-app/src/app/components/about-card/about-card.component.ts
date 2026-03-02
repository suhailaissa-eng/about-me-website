import { Component, InputSignal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

export interface AboutContent {
  title: string;
  subtitleSpan: string;
  subtitle: string;
  paragraphs: string[];
  resumeLink: string;
}

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonsModule],
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent {
  public content: InputSignal<AboutContent> = input.required<AboutContent>();
}
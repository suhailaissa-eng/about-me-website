import { Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent {
  public title: InputSignal<string> = input.required<string>();
  public subtitleSpan: InputSignal<string> = input.required<string>();
  public subtitle: InputSignal<string> = input.required<string>();
  public paragraphs: InputSignal<string[]> = input.required<string[]>();
  public resumeLink: InputSignal<string | undefined> = input<string | undefined>();
}
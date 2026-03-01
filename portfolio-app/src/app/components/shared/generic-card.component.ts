import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@progress/kendo-angular-layout';

export interface GenericCard {
  title: string;
  description?: string;
  icon?: string;
  image?: string;
  link?: string;
}

@Component({
  selector: 'app-generic-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent {
  public card = input.required<GenericCard>();
}
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardComponent, GenericCard } from '../shared/generic-card.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, GenericCardComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts = signal<GenericCard[]>([
    { title: 'Phone', description: '+972 598458775' },
    { title: 'Email', description: 'suhailaissa610@gmail.com' },
    { title: 'Address', description: 'Palestine, Tulkarem' }
  ]);
}
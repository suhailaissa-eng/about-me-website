import { Component } from '@angular/core';
import { CardModule } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardModule],
  template: `
    <kendo-card>
      <h2>Serv<span>i</span>ces</h2>
      <p>I provide software development services including modern apps, QA, and Big Data solutions.</p>
    </kendo-card>
  `,
  styles: [`h2 span { color:pink; } kendo-card { margin:30px auto; padding:20px; max-width:600px; }`]
})
export class ServicesComponent {}
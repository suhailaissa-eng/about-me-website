import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { CommonModule } from '@angular/common';
interface Project { title:string; desc:string; img:string; alt:string; }

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CardModule, InputsModule,CommonModule,],
  template: `
    <h2>Recent <span>Projects</span></h2>
    <input kendoTextBox [(ngModel)]="search" placeholder="Search projects" />
    <div *ngFor="let p of filteredProjects()" class="project-item">
      <kendo-card>
        <img [src]="p.img" [alt]="p.alt" />
        <h3>{{p.title}}</h3>
        <p>{{p.desc}}</p>
      </kendo-card>
    </div>
  `,
  styles: [`.project-item { margin:20px 0; } img { width:100%; border-radius:12px; } span{color:pink;}`]
})
export class ProjectsComponent {
  search = '';
  projects: Project[] = [
    {title:'GOIT', desc:'Mobile app for managing subscriptions.', img:'./assets/goit.png', alt:'GOIT app'},
    {title:'Financial Hub', desc:'Big Data platform for currencies.', img:'./assets/financial.png', alt:'Financial Hub'},
    {title:'Coplay', desc:'Football booking app.', img:'./assets/coplay.png', alt:'Coplay app'}
  ];
  filteredProjects() { 
    return this.projects.filter(p => p.title.toLowerCase().includes(this.search.toLowerCase()) || p.desc.toLowerCase().includes(this.search.toLowerCase()));
  }
}
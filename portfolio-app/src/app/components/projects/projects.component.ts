import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { CommonModule } from '@angular/common';

interface Project { 
  title: string; 
  desc: string; 
  img: string; 
  alt: string; 
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CardModule, InputsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  search = '';
  projects: Project[] = [
    { title:'GOIT', desc:'Mobile app for managing subscriptions.', img:'./assets/img/goit.png', alt:'GOIT app' },
    { title:'Financial Hub', desc:'Big Data platform for currencies.', img:'./assets/img/financial.png', alt:'Financial Hub' },
    { title:'Coplay', desc:'Football booking app.', img:'./assets/img/coplay.png', alt:'Coplay app' }
  ];

  filteredProjects() { 
    return this.projects.filter(p => 
      p.title.toLowerCase().includes(this.search.toLowerCase()) || 
      p.desc.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
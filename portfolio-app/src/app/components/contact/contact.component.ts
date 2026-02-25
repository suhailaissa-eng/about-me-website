import { Component } from '@angular/core';
import { CardModule } from '@progress/kendo-angular-layout';
import { CommonModule } from '@angular/common';
interface Contact { title:string; info:string; }

@Component({
  selector:'app-contact',
  standalone:true,
  imports:[CardModule,
    CommonModule,


  ],
  template:`
    <h2>Contact <span>Info</span></h2>
    <div *ngFor="let c of contacts">
      <kendo-card>
        <h3>{{c.title}}</h3>
        <p>{{c.info}}</p>
      </kendo-card>
    </div>
  `,
  styles:[`span{color:pink;}`]
})
export class ContactComponent {
  contacts: Contact[] = [
    {title:'Phone', info:'+972 598458775'},
    {title:'Email', info:'suhailaissa610@gmail.com'},
    {title:'Address', info:'Palestine, Tulkarem'}
  ];
}
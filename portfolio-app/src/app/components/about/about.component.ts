import { Component } from '@angular/core';
import { CardModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@Component({
  selector:'app-about',
  standalone:true,
  imports:[CardModule, ButtonsModule],
  template: `
    <kendo-card>
      <div style="display:flex;flex-direction:column;align-items:center;">
        <img src="./assets/suhaila.png" alt="Suhaila" style="width:200px;height:200px;border-radius:12px"/>
        <h2>About <span>Me</span></h2>
        <p>I’m Suhaila, a software engineering student with experience in full-stack, mobile, Big Data, databases, and QA.</p>
        <a kendoButton href="./assets/Suhaila.pdf" target="_blank">Download Resume</a>
      </div>
    </kendo-card>
  `,
  styles:[`span{color:pink;}`]
})
export class AboutComponent {}
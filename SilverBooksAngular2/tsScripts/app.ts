import { Component } from '@angular/core';
@Component({
    //moduleId: module.id,
    //templateUrl: './serge.html',
    selector: 'my-app',
    template: `    
    <h2>My favorite skill is: {{myskills}}</h2>
<button (click)="myfunction()">My button</button>
    <p>Skill:</p>
    <ul>
      <li *ngFor="let skl of skills">
        {{ skl }}
      </li>
    </ul>
  `
})
export class AppComponent {
    title = 'ASP.NET MVC 5 with Angular 2';
    skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
    myskills = this.skills[1];


    myfunction(): void {

        let serge: string = "apple";
        alert(this.title);
    }
}
import { Component } from '@angular/core';

declare var module: {
    id: string;
}


@Component({
    //moduleId: module.id,
    //templateUrl: './serge.html',
    selector: 'my-app',
    templateUrl: './Template/Browse/Index.html'  

})
export class AppComponent {
    title = 'ASP.NET MVC 5 with Angular 2';
    skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
    myskills = this.skills[1];
    heading = "Welcome to SilverBooks. We sell rare books and comics";

    myfunction(): void {

        let serge: string = "apple";
        alert(this.title);

    }
}
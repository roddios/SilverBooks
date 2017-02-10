import { Component } from '@angular/core';

declare var module: {
    id: string;
}

@Component({
    selector: 'replace-me',
    templateUrl: './Template/Browse/Index.html'
})  

export class CalendarComponent {
    myName = "Calebndarerer";

    myfunction(): void {
        //let serge: string = "apple";
        //alert(this.title);
    }
}
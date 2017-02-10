import { Component } from '@angular/core';

declare var module: {
    id: string;
}

@Component({
    selector: 'replace-me',
    templateUrl: './Template/Calendar/Index.html'
})  

export class CalendarComponent {
    myName = "my name is Calendar";

    myfunction(): void {
        //let serge: string = "apple";
        //alert(this.title);
    }
}
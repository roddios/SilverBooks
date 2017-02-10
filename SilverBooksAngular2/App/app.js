"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ASP.NET MVC 5 with Angular 2';
        this.skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
        this.myskills = this.skills[1];
        this.heading = "Welcome to SilverBooks. We sell rare books and comics";
    }
    AppComponent.prototype.myfunction = function () {
        var serge = "apple";
        alert(this.title);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        //templateUrl: './serge.html',
        selector: 'my-app',
        templateUrl: './Template/Browse/Index.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
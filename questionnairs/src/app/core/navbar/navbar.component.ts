import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sd-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls:['navbar.component.css']
})
export class NavbarComponent{
    constructor(){
        console.log('NavbarComponent constructor.');
    }
    logout(){
        console.log('logout');
    }
}
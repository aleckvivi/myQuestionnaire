import { Component } from '@angular/core';

@Component({
    selector: 'sd-about',
    styleUrls:['about.component.css'],
    templateUrl:'about.component.html'
})

export class AboutComponent{
    name: string='Yang jun';
    now: Date=new Date();
}
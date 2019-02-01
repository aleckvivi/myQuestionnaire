import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionType } from '../shared/models/question.model';



@Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

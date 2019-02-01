import { Component,EventEmitter, Input, Output } from '@angular/core';

import { QuestionModel } from '../../../models/question.model';
import { QuestionComponent } from '../../index';

@Component({
    moduleId: module.id,
    selector: 'question-text',
    templateUrl: './question-text.component.html',
    styleUrls: ['./question-text.component.scss']
})
export class QuestionTextComponent extends QuestionComponent {
    @Input() question: QuestionModel;
    @Input() editable: boolean;
    @Output() deleteQuestionRequest:EventEmitter<any>=new EventEmitter();
}

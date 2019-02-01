import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionCheckComponent } from './question-checkbox/index';
import { QuestionRadioComponent } from './question-radio/index';
import { QuestionScoreComponent } from './question-score/index';
import { QuestionTextComponent } from './question-text/index';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [QuestionCheckComponent, QuestionRadioComponent, QuestionScoreComponent, QuestionTextComponent],
    exports: [QuestionCheckComponent, QuestionRadioComponent, QuestionScoreComponent, QuestionTextComponent, CommonModule, FormsModule]
})
export class QuestionSharedModule{}
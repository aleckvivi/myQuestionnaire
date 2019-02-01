import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionSharedModule } from './shared/question-share.module';
@NgModule({
    imports: [ QuestionSharedModule, CommonModule, FormsModule],
    exports: [CommonModule, QuestionSharedModule]
})

export class QuestionModule{
    static forRoot():ModuleWithProviders{
        return {
            ngModule: QuestionModule
        };
    }
}
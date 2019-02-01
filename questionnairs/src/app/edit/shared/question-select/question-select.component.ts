import { Component, EventEmitter, Output } from '@angular/core';

import { QuestionModel, QuestionType } from '../../../shared/models/question.model'

@Component({
    selector: 'question-select',
    moduleId: module.id,
    templateUrl:'question-select.component.html',
    styleUrls:['question-select.component.css'] 
})
export class QuestionSelectComponent{
    //通过事件将数据流出
    @Output() addQuestionRequest=new EventEmitter();

    private controls:any[]; //对应四种问题类型

    constructor(){
        this.controls=[
            {type: QuestionType.Text, label: '文本问题', iconClass: 'icon-text'},
            {type: QuestionType.SingleSelect, label: '单选问题', iconClass: 'icon-radio'},
            {type: QuestionType.MultiSelect, label: '多选问题', iconClass: 'icon-checkbox'},
            {type: QuestionType.Score, label: '分值问题', iconClass: 'icon-star'}
        ];
    }

    //自定义点击绑定事件onAddQuestion，触发输出属性addQuestionRequest事件addQuestionRequest
    onAddQuestion(control: any){
        this.addQuestionRequest.emit(control.type);
    }
}
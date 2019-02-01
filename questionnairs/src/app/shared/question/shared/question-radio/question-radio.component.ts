import { Component, EventEmitter, Input, Output } from '@angular/core';

import { QuestionComponent } from '../../index';
import { QuestionModel } from '../../../models/question.model'

@Component(
    {
        moduleId: module.id,
        selector: 'question-radio',
        templateUrl:'question-radio.component.html'
    }
)
export class QuestionRadioComponent extends QuestionComponent{
    @Input() question: QuestionModel;
    @Input() editable: boolean;
    @Output() deleteQuestionRequest :EventEmitter<any> = new EventEmitter();

    //保存当前radios选项的最后一个index
    //在添加options时，指向下一个index
    private key: number;

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
        
        this.copyQuestion();
        let options=this.question.options;
        this.key= options[options.length-1].key;
    }

    //删除问题选项，至少保留一个选项
    onDeleteOption(index:number){
        if(this.question.options.length<=1){
            return;
        }
        this.question.options.splice(index,1);
    }
    //添加新的问题选项
    onAddOption(){
        this.question.options.push({key: ++ this.key, value:''});
    }

}


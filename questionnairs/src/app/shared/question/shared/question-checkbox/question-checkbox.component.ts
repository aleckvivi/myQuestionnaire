import { Component, EventEmitter, Input, Output } from '@angular/core';

//父类
import { QuestionComponent } from '../../index';
import { QuestionModel } from '../../../models/question.model';

@Component({
    moduleId: module.id,
    selector: 'question-checkbox',
    templateUrl: 'question-checkbox.component.html'
})
export class QuestionCheckComponent extends QuestionComponent{
    @Input() question: QuestionModel;
    @Input() editable: boolean;
    @Output() ddeleteQuestionRequest: EventEmitter<any>=new EventEmitter();

    private key:number;

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.copyQuestion();
        let options=this.question.options;
        this.key=this.question[options.length-1].key;
        //复选题，因此answer下加了个数组属性selected
        //初始化时，如果该属性为空，则初始化一个空的数组
        if(!this.question.answer.selected){
            this.question.answer.selected=[];
        }
        
    }

    onDeleteOption(index:number){
        if(this.question.options.length<=1){
            return;
        }
        this.question.options.splice(index,1);
    }

    onAddOption(){
        this.question.options.push({key: ++this.key, value: ''});
    }

    //回答复选题时：如果选中而且原先的答案中不存在这个选项，则在答案中加入改选项
    //如果取消选中，且原先答案中包括该选项，在答案中删除该选项。 
    setSelectValue(checked:boolean, value:string){
        let selected=this.question.answer.selected;
        let index:number= selected.indexOf(value);
        if(checked){
            if(index<0){
                selected.push(value);
            }
        }else{
            if(index>-1){
                selected.splice(index,1);
            }
        }
    }
}


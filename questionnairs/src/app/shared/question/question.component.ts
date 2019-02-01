import { OnInit, EventEmitter } from '@angular/core';
import { QuestionModel } from '../models/question.model';

export class QuestionComponent implements OnInit {
    question: QuestionModel;
    backupQuestion: QuestionModel;
    editable: boolean=false;
    isEditing: boolean =false;
    deleteQuestionRequest:EventEmitter<any>=new EventEmitter();

    
    ngOnInit(): void {

     }

     //通过JSON串行化源对象，再解析成目标对象
     private copy(source:QuestionModel): QuestionModel{
         return <QuestionModel>JSON.parse(JSON.stringify(source));
     }

     /**
      * copyQuestion
      */
     public copyQuestion() {
        this.backupQuestion=this.copy(this.question);
     }

     onEdit(){
         this.isEditing=true;
     }

     onSave(){
         this.copyQuestion();
         this.isEditing=false;
     }

     onCancel(){
         //放弃当前的修改，从备份中恢复
         this.question=this.copy(this.backupQuestion);
         this.isEditing= false;
     }

     onDelete(){
         this.deleteQuestionRequest.emit(this.question);
     }
}

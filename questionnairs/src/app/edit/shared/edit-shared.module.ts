//通过NgModule 的imports, exports元数据来管理模块间的引用关系
//创建这个模块文件来管理问卷编辑页面中所有的子组件

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionSelectComponent } from './question-select/index';

@NgModule({
    imports: [CommonModule],
    declarations: [QuestionSelectComponent],
    exports: [QuestionSelectComponent,CommonModule]
})
export class EditSharedModule {}
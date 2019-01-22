import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent }  from './about.component'

@NgModule({
    imports:[CommonModule],//导入额外的模块
    declarations:[AboutComponent],//导入需要用到的组件，管道之类
    exports: [AboutComponent]
})

export class AboutModule {}
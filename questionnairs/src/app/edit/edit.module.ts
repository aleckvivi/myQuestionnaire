import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSharedModule } from './shared/edit-shared.module';


@NgModule({
    declarations: [],
    imports: [ CommonModule, EditSharedModule ],
    exports: [EditSharedModule],
    providers: [],
})
export class EditModule {}
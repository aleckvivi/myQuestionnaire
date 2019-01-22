import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule} from './home-routing.module';
import { AboutModule } from '../About/about.module';

@NgModule({
    imports: [CommonModule, SharedModule, CarouselModule.forRoot(), HomeRoutingModule, AboutModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {}



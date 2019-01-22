import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule(
    {
        imports:[
            RouterModule.forChild([
                //子组件的路由
                //根目录-》首页，调用HomeComponent这个子组件
                { path:'', component: HomeComponent}
            ])
        ],
        exports: [RouterModule]
    }
)
export class HomeRoutingModule {}
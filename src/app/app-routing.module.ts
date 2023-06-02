import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import {FormViewComponent} from './pages/form-view/form-view.component'
const routes: Routes = [
  {
    path:'',
    component: MainViewComponent,

  }
  ,{
    path:'notes',
    component:FormViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

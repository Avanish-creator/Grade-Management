import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeManagementComponent } from './grade-management/grade-management.component';


const routes: Routes = [
  {path:"grademanagement", component:GradeManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

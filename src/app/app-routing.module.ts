import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreategradeComponent } from './creategrade/creategrade.component';


const routes: Routes = [
  {
  path:"grade",component:CreategradeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSetComponent } from './create-set/create-set.component';
import { ListSetComponent } from './list-set/list-set.component';
import { SetComponent } from './set.component';
import { UpdateSetComponent } from './update-set/update-set.component';

const routes: Routes = [
  {path: "", component : SetComponent, children:[
    {path:"list-set", component:ListSetComponent},
    {path:"update-set/:id", component:UpdateSetComponent},
    {path:"create-set", component : CreateSetComponent }
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetRoutingModule { }

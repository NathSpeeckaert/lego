import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetComponent } from './set/set.component';


const routes: Routes = [
  {path: 'set', component: SetComponent, loadChildren:()=> import("./set/set.module").then(m => m.SetModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountChartComponent } from './count-chart/count-chart.component';
import { HomeComponent } from './home/home.component';
import { SetComponent } from './set/set.component';


const routes: Routes = [
  {path:"", component: CountChartComponent},
  {path: 'set', component: SetComponent, loadChildren:()=> import("./set/set.module").then(m => m.SetModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

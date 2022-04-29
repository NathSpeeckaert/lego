import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetRoutingModule } from './set-routing.module';
import { SetComponent } from './set.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateSetComponent } from './update-set/update-set.component';
import { ListSetComponent } from './list-set/list-set.component';
import { CreateSetComponent } from './create-set/create-set.component';
import { NgSelect2Module } from 'ng-select2';




@NgModule({
  declarations: [
    SetComponent,
    UpdateSetComponent,
    ListSetComponent,
    CreateSetComponent,
 

  ],
  imports: [
    CommonModule,
    SetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelect2Module
  ]
})
export class SetModule { }

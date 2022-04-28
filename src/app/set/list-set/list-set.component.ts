import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ISet } from 'src/app/models/ISet';
import { ITheme } from 'src/app/models/ITheme';
import { SetService } from 'src/app/services/set.service';

@Component({
  selector: 'app-list-set',
  templateUrl: './list-set.component.html',
  styleUrls: ['./list-set.component.scss']
})
export class ListSetComponent implements OnInit {

  setList: ISet[] = [];
  theme:ITheme[]=[]
  fg: FormGroup;

  constructor(private _setService : SetService, private _route : Router, private fb: FormBuilder) { 
    this.fg = fb.group({
      'status': [],
      'search': [],

    })
  }

  ngOnInit(): void {
    this._setService.getAllSets({ }).subscribe(
      data => {
        this._setService.getAllTheme().subscribe(t =>{
          this.setList.map(s => s.theme=(<ITheme>t.find(t => t.id === s.theme_id)))
        })
        this.setList = data
      }
    )
  }

  submit() {
    this._setService.getAllSets({ ...this.fg.value }).subscribe(
      data => {
        this._setService.getAllTheme().subscribe(t =>{
          this.setList.map(s => s.theme=(<ITheme>t.find(t => t.id === s.theme_id)))
        })
        this.setList = data
      }
    )
  }

  // filteredList(){
    
  //   return this.setList.filter(item => (item.name.toLowerCase().includes(this.search.toLowerCase())) || 
  //   (item.set_num.startsWith(this.search))|| 
  //   (item.theme?.name.toLowerCase().includes(this.search.toLowerCase())))
  // }

  // listByStatus(){
  //   let state = this.setList.status_id;
  //   this._setService.getAllSetsByStatus(state).subscribe(
  //     data => {
  //       this._setService.getAllTheme().subscribe(t =>{
  //         this.setList.map(s => s.theme=(<ITheme>t.find(t => t.id === s.theme_id)))
  //       })
  //       this.setList = data
  //     }
  //   )
  
  // }




}

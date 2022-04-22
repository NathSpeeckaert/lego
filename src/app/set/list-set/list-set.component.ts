import { Component, OnInit } from '@angular/core';
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
  search : string = '';
  theme:ITheme[]=[]

  constructor(private _setService : SetService, private _route : Router) { }

  ngOnInit(): void {
    this._setService.getAllSets().subscribe(
      data => {
        this._setService.getAllTheme().subscribe(t =>{
          this.setList.map(s => s.theme=(<ITheme>t.find(t => t.id === s.theme_id)))
        })
        this.setList = data
      }
    )
  

  }

  filteredList(){
    
    return this.setList.filter(item => (item.name.toLowerCase().includes(this.search.toLowerCase())) || 
    (item.set_num.startsWith(this.search))|| 
    (item.theme?.name.toLowerCase().includes(this.search.toLowerCase())))
  }


}

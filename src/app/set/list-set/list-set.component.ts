import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISet } from 'src/app/models/ISet';
import { SetService } from 'src/app/services/set.service';

@Component({
  selector: 'app-list-set',
  templateUrl: './list-set.component.html',
  styleUrls: ['./list-set.component.scss']
})
export class ListSetComponent implements OnInit {

  setList: ISet[] = [];
  search : string = '';

  constructor(private _setService : SetService, private _route : Router) { }

  ngOnInit(): void {
    this._setService.getAllSets().subscribe(
      data => this.setList = data
    )
  }

  filteredList(){
    return this.setList.filter(item => (item.name.toLowerCase().includes(this.search.toLowerCase())) || (item.set_num.startsWith(this.search)))
  }


}

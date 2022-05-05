import { Component, OnInit } from '@angular/core';

import { ICount } from '../models/ICount';
import { HomeService } from '../services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   count:ICount;
    constructor (private _homeService : HomeService){

    }
  ngOnInit(): void {
      this._homeService.getCount().subscribe(compte=>{this.count = compte})
  }

  }


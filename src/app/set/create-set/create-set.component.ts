import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISet } from 'src/app/models/ISet';
import { SetService } from 'src/app/services/set.service';

@Component({
  selector: 'app-create-set',
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.scss']
})
export class CreateSetComponent implements OnInit {

  creationForm:FormGroup;
  setNum: string = '';
  newSet: ISet;


  constructor(private _setService : SetService,
    private _activeRoute : ActivatedRoute,
    private _route: Router) { }

  ngOnInit(): void {
    

  }
  importRequest(){
    this._setService.getExternalSetBySetNum(this.setNum).subscribe(
      importedSet =>
      {
        this.newSet = importedSet;
       
      }
    )
  }

  addImport(){
    

  }


}

// {
//   name : [null,[]],
//   set_num : [null,[]],
//   year:[null,[]],
//   theme_id : [null,[]],
//   set_img_url:[null,[]],
//   set_url:[null,[]],
//   lego_price:[null,[]],     
//   buy_price:[null,[]],
//   buy_date: [null,[]],
//   buy_loc: [null,[]],
//   sale_date: [null,[]],
//   sale_price: [null,[]],
//   status:[null,[]],
// }


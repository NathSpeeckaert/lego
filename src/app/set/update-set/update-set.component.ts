import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ISet } from 'src/app/models/ISet';
import { IStatus } from 'src/app/models/IStatus';
import { ITheme } from 'src/app/models/ITheme';
import { SetService } from 'src/app/services/set.service';

@Component({
  selector: 'app-update-set',
  templateUrl: './update-set.component.html',
  styleUrls: ['./update-set.component.scss']
})
export class UpdateSetComponent implements OnInit {
  setForm! : FormGroup;
  // themes : ITheme[]=[];
  set!: ISet;
  status:IStatus[]=[];
  theme:ITheme[]=[];
  
  constructor(private _fb: FormBuilder, 
              private _setService : SetService, 
              private _activeRoute : ActivatedRoute, 
              private _route : Router)
    {

    }

  ngOnInit(): void {

    let id = this._activeRoute.snapshot.params['id'];
    this._setService.getByid(id).subscribe(
      responseSet =>
      {
        this.set = responseSet;
        this.setForm = this._fb.group(
          {
            name : [null,[]],
            set_num : [null,[]],
            year:[null,[]],
            theme_id : [null,[]],
            set_img_url:[null,[]],
            set_url:[null,[]],
            lego_price:[null,[Validators.min(0)]],     
            buy_price:[null,[Validators.required, Validators.min(0)]],
            buy_date: [null,[Validators.required]],
            buy_loc: [null,[Validators.required, Validators.minLength(2)]],
            sale_date: [null,[]],
            sale_price: [null,[Validators.min(0)]],
            status_id:[null,[]],
          }
        )
        
        this._setService.getAllStatus().subscribe(
          status => {
            this.status = status;
            console.log(responseSet);
            this.setForm.patchValue(responseSet);
          }
        )
        this._setService.getAllTheme().subscribe(
          theme => {
            this.set.theme = theme.find((t:ITheme) => t.id === this.set.theme_id)
          }
        )

      }
    )
    
  }

updateSet(){
  if(this.setForm.valid){
    let set = {... this.setForm.value, id:this.set.id, status:parseInt(this.setForm.value.status), theme_id:parseInt(this.setForm.value.theme_id)};
    this._setService.updateSet(set).subscribe(
      setAdded => this._route.navigateByUrl('/list-set')

    )

    }else{
      this.setForm.markAllAsTouched();
    }
  }

}





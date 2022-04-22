import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISet } from 'src/app/models/ISet';
import { IStatus } from 'src/app/models/IStatus';
import { ITheme } from 'src/app/models/ITheme';
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
  status:IStatus[]=[];
  theme:ITheme[]=[];


  constructor(private _fb: FormBuilder, private _setService : SetService,
    private _activeRoute : ActivatedRoute,
    private _route: Router) { }

  ngOnInit(): void {

    this.creationForm = this._fb.group(
      {
            name : [null,[]],
            set_num : [null,[]],
            year:[null,[]],
            theme_id : [null,[]],
            set_img_url:[null,[]],
            set_url:[null,[]],
            lego_price:[0,[Validators.min(0)]],     
            buy_price:[0,[Validators.required, Validators.min(0)]],
            buy_date: [null,[Validators.required]],
            buy_loc: [null,[Validators.required,Validators.minLength(2)]],
            sale_date: [null,[]],
            sale_price: [0,[Validators.min(0)]],
            status:[2,[]],
      }
      
    )

  }
  importRequest(){
    this._setService.getExternalSetBySetNum(this.setNum).subscribe(
      importedSet =>
      {
        this.creationForm.patchValue(importedSet);
        this.newSet = importedSet;
        this._setService.getAllStatus().subscribe(
          status => this.status = status
        )
        this._setService.getAllTheme().subscribe(
          theme => {
            this.newSet.theme = <ITheme>theme.find(t => t.id === this.newSet.theme_id)
          }
        )
      }
    )
  }

  addImport(){
    let setToImport = {...this.creationForm.value};
    this._setService.addSet(setToImport).subscribe();
    this.creationForm.reset();
    this.setNum='';
  }

  clearForm(){
    this.creationForm.reset();
    this.setNum='';
  }


}




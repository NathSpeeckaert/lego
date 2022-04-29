import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SetForm } from 'src/app/forms/set.form';
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

    this.creationForm = this._fb.group(SetForm);

  }
  importRequest(){
    this._setService.getExternalSetBySetNum(this.setNum).subscribe(
      importedSet =>
      {
        this.creationForm.patchValue(importedSet);
        this.newSet = importedSet;
        this._setService.themes$.subscribe(
          theme => {
            this.newSet.theme = <ITheme>theme.find(t => t.id === this.newSet.theme_id)
          }
        )
      }
    )
  }

  addImport(){
    if(this.creationForm.invalid) return;
    let setToImport = {...this.creationForm.value};
    this._setService.addSet(setToImport).subscribe(() => {
      this.clearForm();
    });
  }

  clearForm(){
    this.creationForm.reset();
    this.setNum='';
  }


}




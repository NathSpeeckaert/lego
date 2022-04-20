import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISet } from '../models/ISet';
import { IStatus } from '../models/IStatus';

@Injectable({
  providedIn: 'root'
})
export class SetService {

  private _APISET : string = 'http://localhost:3000/set/'
  private _APITHEME : string = 'http://localhost:3000/theme/'
  private _APISTATUS : string = 'http://localhost:3000/status'


  constructor(private _http:HttpClient) { }

//Sets

  getAllSets(): Observable<ISet[]>{
    return this._http.get<ISet[]>(this._APISET);
  }

  getByid(id:number) : Observable<ISet>{
    return this._http.get<ISet>(this._APISET+id)
  }

  updateSet(set:ISet): Observable<ISet>{
    return this._http.put<ISet>(this._APISET+set.id, set);
  }

  //Status

  getAllStatus(): Observable<IStatus[]>{
    return this._http.get<IStatus[]>(this._APISTATUS);
  }
}

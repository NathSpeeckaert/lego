import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISet } from '../models/ISet';

@Injectable({
  providedIn: 'root'
})
export class SetService {

  private _APISET : string = 'http://localhost:3000/lego'


  constructor(private _http:HttpClient) { }

  getAll(): Observable<ISet[]>{
    return this._http.get<ISet[]>(this._APISET);
  }
}

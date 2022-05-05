import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICount } from '../models/ICount';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _APICOUNT : string ='http://localhost:8000/api/homeCount';



  constructor(private _http:HttpClient)
  { }

  getCount():Observable <ICount>{
    return this._http.get<ICount>(this._APICOUNT);

  }
}

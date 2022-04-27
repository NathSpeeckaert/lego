import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectableObservable, map, Observable } from 'rxjs';
import { ISet } from '../models/ISet';
import { IStatus } from '../models/IStatus';
import { ITheme } from '../models/ITheme';

@Injectable({
  providedIn: 'root'
})
export class SetService {

  private _APISET : string = 'http://localhost:8000/api/set/'
  private _APITHEME : string = 'https://rebrickable.com/api/v3/lego/themes/'

  private _APIBRICKABLE : string ='https://rebrickable.com/api/v3/lego/sets/'
  private key : string = '?key=0b7437b3085ab505d0925297137bd398'


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

  getExternalSetBySetNum(setNum:string): Observable<ISet>{
    return this._http.get<ISet>(this._APIBRICKABLE + setNum + this.key);
  }

  addSet(setToImport: ISet): Observable<ISet>{
    return this._http.post<ISet>(this._APISET, setToImport);

  }




  //Theme
  getAllTheme(): Observable<ITheme[]>{
    return this._http.get<any>(this._APITHEME+this.key+'&page_size=500').pipe(map(result => { console.log(result)
      return result.results.map((t: ITheme) => {
        if(t.parent_id) {
          t.parent = <ITheme>result.results.find((x: ITheme) => x.id === t.parent_id);
        }
        return t;
      })
    }));
  }
}

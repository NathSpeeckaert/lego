import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ISet } from '../models/ISet';
import { IStatus } from '../models/IStatus';
import { ITheme } from '../models/ITheme';

@Injectable({
  providedIn: 'root'
})
export class SetService {

  private _APISET : string = 'http://localhost:8000/api/set'
  private _APITHEME : string = 'https://rebrickable.com/api/v3/lego/themes/'

  private _APIBRICKABLE : string ='https://rebrickable.com/api/v3/lego/sets/'
  private key : string = '?key=0b7437b3085ab505d0925297137bd398'

  public themes$: BehaviorSubject<ITheme[]>

  constructor(private _http:HttpClient) { 
    this.themes$ = new BehaviorSubject<ITheme[]>([]);
    this._http.get<any>(this._APITHEME+this.key+'&page_size=500').pipe(map(result => { console.log(result)
      return result.results.map((t: ITheme) => {
        if(t.parent_id) {
          t.parent = <ITheme>result.results.find((x: ITheme) => x.id === t.parent_id);
        }
        return t;
      })
    })).subscribe(data => {
      this.themes$.next(data)
    });
  }

//Sets

  getAllSets(parameters: any): Observable<ISet[]>{

      let params = new HttpParams();
      if(parameters.status) {
        params = params.append('status', parameters.status);
      }
      if(parameters.search){
        params = params.append('search', parameters.search)
      }
      if(parameters.theme){
        params = params.append('theme', parameters.theme)
      }
      return this._http.get<ISet[]>(this._APISET, {params});
    
  }

  getByid(id:number) : Observable<ISet>{
    return this._http.get<ISet>(this._APISET+ '/' + id)
  }

  updateSet(set:ISet): Observable<ISet>{
    return this._http.put<ISet>(this._APISET+ '/' +set.id, set);
  }

  getExternalSetBySetNum(setNum:string): Observable<ISet>{
    return this._http.get<ISet>(this._APIBRICKABLE + setNum + this.key);
  }

  addSet(setToImport: ISet): Observable<ISet>{
    return this._http.post<ISet>(this._APISET, setToImport);
  }

  // getAllSetsByStatus(state:number):Observable<ISet[]>{
  //   return this._http.get<ISet[]>(this._APISET+state);
  // }
}

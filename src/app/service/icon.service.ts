import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class IconService {

  constructor(private http:HttpClient) { }
  icons:object[];
  selectedIcon:object;
  apiUrl="assets/data/icons.json";
  getIcons() {
      return this.http.get(this.apiUrl).pipe(map((response:any)=>{
        this.icons=response.data;
        return this.icons;
    }));
  }
  getIcon(index:number){
    if(this.icons){
      this.selectedIcon=this.icons[index];
      return this.selectedIcon;
    }
  }

}

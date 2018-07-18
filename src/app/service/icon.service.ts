import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class IconService {

  
  constructor(private http:HttpClient) { }
  icons:any[];
  selectedIcon:any;
  apiUrl="assets/data/icons.json";
  getIcons() {
      return this.http.get(this.apiUrl).pipe(map((response:any)=>{
        this.icons=response.data;
        return this.icons;
    }));
  }
  getIcon(iconClass:string){
    if(this.icons){
      this.selectedIcon=this.icons.find(x => x.class === iconClass) as Object;
      console.log(this.selectedIcon);
      return this.selectedIcon;
    }
  }

}

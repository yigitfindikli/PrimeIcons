import { Component, OnInit } from '@angular/core';
import { IconService } from './service/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  icons:object[];
  selectedIcon:object;
  constructor(private service:IconService){}
  getIcons(){
    this.service.getIcons().subscribe((data:any)=>{
      this.icons=data;
    })
  }
  getIcon(index:number){
    this.selectedIcon=this.service.getIcon(index);
  }
  ngOnInit(){
  this.getIcons();
  }
}

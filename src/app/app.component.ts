import { Component, OnInit, Input } from '@angular/core';
import { IconService } from './service/icon.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})

export class AppComponent implements OnInit {
  title = 'app';
  icons: object [];
  selectedIcon: any;
  iconCode = '';
  show = false;
  searchText:string;
  constructor(private service: IconService) {}

  get stateName() {
    return this.show ? 'show' : 'hide'
  }



  getIcons() {
    this.service.getIcons().subscribe((data: any) => {
      this.icons = data;
      this.getIconString();
    });
  }
  getIcon(id) {
    this.selectedIcon = this.service.getIcon(id);
    this.show=true;
    this.getIconString();
  }
  getIconString() {
    if (this.selectedIcon) {
      this.iconCode = '<i class="pi pi-' + this.selectedIcon.properties.name + '"></i>';
    }
  }
  unselectIcon() {
    this.selectedIcon = null;
    this.show=false;
  }
  ngOnInit() {
  this.getIcons();
  }
}
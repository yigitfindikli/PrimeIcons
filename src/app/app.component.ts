import { Component, OnInit, Input } from '@angular/core';
import { IconService } from './service/icon.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('popOverState', [
      state('hidden', style({
        transform: 'translate3d(0, 25%, 0)', 
        opacity: 0,
        display: 'none'
    })),
    state('visible', style({
        display: 'block',
        transform: 'none', 
        opacity: 1
    })),
    state('void', style({ 
        transform: 'translate3d(0, 25%, 0) scale(0.9)', 
        opacity: 0 
    })),
      transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  ]
})

export class AppComponent implements OnInit {
  title = 'PrimeIcons';
  icons: object [];
  selectedIcon: any;
  iconCode = '';
  show = false;
  searchText:any;
  constructor(private service: IconService) {}

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
      this.iconCode = this.selectedIcon.properties.name;
    }
  }

  unselectIcon() {
    this.selectedIcon=null;
    this.show=false;
  }

  ngOnInit() {
    this.getIcons();
  }
  
}
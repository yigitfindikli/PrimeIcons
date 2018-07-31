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
        transform: 'translateY(0) scale(1)'
      })),
      state('hide',   style({
        transform: 'translateY(100%) scale(0)'
      })),
      transition('show => hide', animate('150ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ])
  ]
})

export class AppComponent implements OnInit {
  title = 'app';
  icons: object [];
  selectedIcon: any;
  iconCode = '';
  show = false;
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
      this.iconCode = this.selectedIcon.properties.name;
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
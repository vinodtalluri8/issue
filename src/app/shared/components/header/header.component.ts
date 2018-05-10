import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private toggle: boolean;
  @Input() title: string;
  @Input() logoSrc: string;
   userName: string;

  constructor() {
    this.toggle = false;
    this.userName = 'Ajay';
  }

  ngOnInit() {
  }

  hamburgerToggle() {
    if (this.toggle) {
      this.toggle = false;
    } else {
      this.toggle = true;
    }
  }
}

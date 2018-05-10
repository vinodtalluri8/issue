import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() method: string;
  @Input() label: string;
  @Input() styleClass: string;
  @Input() disabled: boolean;
  constructor() {
    this.styleClass = 'btn btn-danger';
  }

  ngOnInit() {
  }


}

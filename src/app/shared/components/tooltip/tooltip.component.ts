import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  @Input() logoSrc: string;
  @Input() message: string;
  @Input() position: string;

  constructor() {
    this.position = 'top';
  }

  ngOnInit() {
  }

}

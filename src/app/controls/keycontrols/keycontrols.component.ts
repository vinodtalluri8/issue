import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-keycontrols',
  templateUrl: './keycontrols.component.html',
  styleUrls: ['./keycontrols.component.css']
})
export class KeycontrolsComponent implements OnInit {

  itemsPath: MenuItem[];
  constructor(private router: Router) {
    this.itemsPath = [{ label: 'Internal Controls' },
    { label: 'Key Controls' }];
  }



  ngOnInit() {
  }

  /* This method will navigate teh screen to addkeycontrol */
  addKeyControl() {
    this.router.navigate(['../keycontrols/addKeyControl']);
  }

}

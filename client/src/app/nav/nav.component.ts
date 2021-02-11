import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model:any = {}
  hide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
  }

}

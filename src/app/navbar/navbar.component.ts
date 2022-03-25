import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  view=true;
  changeView(){
    this.view=false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

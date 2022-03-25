import { Component, OnInit } from '@angular/core';
import { Summerdetails } from '../models/summerdetails';
import { SummerwearService } from '../services/products/summerwear.service';

@Component({
  selector: 'app-summerwear',
  templateUrl: './summerwear.component.html',
  styleUrls: ['./summerwear.component.css']
})
export class SummerwearComponent implements OnInit {
   summerwear!:Summerdetails;
   summerwears:Summerdetails []=[]
  constructor(private sw:SummerwearService) { }

  ngOnInit(): void {
    this.summerwears = this.sw.getALl();
  }

}

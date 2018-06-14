import { Component, OnInit } from '@angular/core';
import Connaissance from './connaissances';

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  constructor() { }

  connaissances:Array<Connaissance> = [
    new Connaissance("JAVA"),
    new Connaissance("SPRING"),
    new Connaissance("MAVEN")
  ]

  ngOnInit() {
  }

}

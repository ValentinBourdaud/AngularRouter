import { Component, OnInit } from '@angular/core';
import Formation from './formations';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  constructor() { }

  formations:Array<Formation> = [
    new Formation("Module Angular", "la folie"),
    new Formation("Module Java", "la base"),
    new Formation("Module JS", "la déesse")
  ];

  ngOnInit() {
  }

}

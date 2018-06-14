import { Component, OnInit, Injectable } from '@angular/core';
import Formation from './formations';
import { FormationsResolvers } from './FormationsResolvers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css'],
  providers:[
    
  ]
})
export class FormationsComponent implements OnInit {

  
  constructor(private route : ActivatedRoute) { }

  formations:Array<Formation>; /*= [
    new Formation("Module Angular", "la folie"),
    new Formation("Module Java", "la base"),
    new Formation("Module JS", "la déesse")
  ];*/

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.formations = data['formations'];
      console.log('Formations', data['formations']);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PATH_HOME, PATH_DETAIL } from '../constantes';
import { ParamMap } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  idDetail: number=1;
  constructor(private router: Router, private route: ActivatedRoute) { }

  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }

  ngOnInit() {
    console.log("SNAPSHOT", this.route.snapshot.paramMap.get('idDetail'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('isDetail', params.get('idDetail'));
    });
  }


}

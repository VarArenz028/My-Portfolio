import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } }
  ]
})
export class ProjectDetailsComponent implements OnInit {

  public id : number;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() 
  {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.id = id;
  }

  

}

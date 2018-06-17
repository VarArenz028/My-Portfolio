import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
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

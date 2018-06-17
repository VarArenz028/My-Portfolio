import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router : Router) { }

  public projects = [
    {
      'id' : 1,
      'title': 'An Intranet Employee Portal For Sterling Global Call Center',
      'image': '../../../assets/imgs/illustration.jpg'
    },
    {
      'id' : 2,
      'title': 'A Resource Center Website for Information Systems Students in New Era University',
      'image': '../../../assets/imgs/illustration.jpg'
    },
    {
      'id' : 3,
      'title': 'A Online Shopping Website for Woman Fashion(Delux)',
      'image': '../../../assets/imgs/illustration.jpg'
    },
    {
      'id' : 4,
      'title': 'Intranet Employee Portal Intranet Employee Portal Intranet Employee Portal',
      'image': '../../../assets/imgs/illustration.jpg'
    },
  ]

  ngOnInit() {
  }

  viewProject(project) {
    this.router.navigate(['/projects', project.id]);
  }

}

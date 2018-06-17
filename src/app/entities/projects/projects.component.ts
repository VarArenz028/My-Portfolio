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
      'image': '../../../assets/imgs/intranetPortal/dashboard.JPG'
    },
    {
      'id' : 2,
      'title': 'A Resource Center Website for Information Systems Students in New Era University',
      'image': '../../../assets/imgs/isplanning/home.JPG'
    },
    {
      'id' : 3,
      'title': 'A Online Shopping Website for Woman Fashion(Delux)',
      'image': '../../../assets/imgs/pizza/pizzamenu.JPG'
    },
    {
      'id' : 4,
      'title': 'Slice n Dine a static Restaurant Website',
      'image': '../../../assets/imgs/pizza/pizzamenu.JPG'
    },
  ]

  ngOnInit() {
  }

  viewProject(project) {
    this.router.navigate(['/projects', project.id]);
  }

}

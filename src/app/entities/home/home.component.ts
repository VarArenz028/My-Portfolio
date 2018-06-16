import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(){}

  public projects = [
    {
      'title' : 'An Intranet Employee Portal For Sterling Global Call Center',
      'image' : '../../../assets/imgs/illustration.jpg'
    },
    {
      'title': 'A Resource Center Website for Information Systems Students in New Era University',
      'image': '../../../assets/imgs/illustration.jpg'
    },
    {
      'title': 'A Online Shopping Website for Woman Fashion(Delux)',
      'image': '../../../assets/imgs/illustration.jpg'
    },
    {
      'title': 'Intranet Employee Portal Intranet Employee Portal Intranet Employee Portal',
      'image': '../../../assets/imgs/illustration.jpg'
    },
  ]

  ngOnInit() {
  }

  viewProject(title : string)
  {
      console.log(title);
  }

}

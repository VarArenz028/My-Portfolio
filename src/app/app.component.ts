import { Component } from '@angular/core';
import { fade, routerTransition } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'app';


  getAnimationData(routerOutlet : RouterOutlet)
  {
      const routerData = routerOutlet.activatedRouteData['state'];
      
      return routerData;
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './entities/home/home.component';
import { ProjectsComponent } from './entities/projects/projects.component';
import { ProjectDetailsComponent } from './entities/projects/project-details/project-details.component';
import { AboutComponent } from './entities/about/about.component';
import { NotFoundComponent } from './entities/not-found/not-found.component';

const routes: Routes = [
    { path: '',
      redirectTo : 'home',
      pathMatch : 'full',
      data : {
          state : 'home'
      }
    },
    { path: 'home',
      component: HomeComponent,
      data : {
          state : 'home'
      }
     },
    { path: 'projects',
      component: ProjectsComponent,
      data : {
          state : 'projects'
      }
     },
    { path: 'projects/:id',
      component: ProjectDetailsComponent,
      data : {
            state : 'projects/:id'
        } 
      },
    { path: 'about',
      component: AboutComponent, 
      data : {
          state : 'about'
      }
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const appComponents = [HomeComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    AboutComponent,
    NotFoundComponent]
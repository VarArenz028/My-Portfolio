import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './entities/home/home.component';
import { ProjectsComponent } from './entities/projects/projects.component';
import { ProjectDetailsComponent } from './entities/projects/project-details/project-details.component';
import { AboutComponent } from './entities/about/about.component';

const routes: Routes = [
    { path: '', redirectTo : 'home', pathMatch : 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const appComponents = [HomeComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    AboutComponent]
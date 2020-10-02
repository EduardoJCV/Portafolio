import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  id;

  noD = false;

  notFound404 = false;

  project;

  constructor( public projectsService: ProjectsService, private activateRoute: ActivatedRoute ) { 

    this.id = this.activateRoute.snapshot.params.id;

    this.projectsService.getProject(this.id).subscribe( (res:any) =>{
      this.project = res;

      if( res == null || res == undefined ){
        this.notFound404 = true;
        return;
      }

    });

  }

  noDisponible(re){
    this.noD = re;
  }

}

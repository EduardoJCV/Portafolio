import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {


  @Input('tipo') tipo: number;

  items = [];

  projects;

  noD = false;

  constructor(   public projectsService: ProjectsService  ) { 

    setTimeout(() => {

      if (this.tipo == undefined) {
        this.projectsService.getProjects(false).subscribe( (res:any) =>{
          this.projects = res;
        });
      }
      else{
        this.projectsService.getProjects(this.tipo).subscribe( (res:any) =>{
          this.projects = res;
        });
      }

    }, 1000);
  }

  noDisponible(re){
    this.noD = re;
  }

}

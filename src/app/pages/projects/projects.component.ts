import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './../../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  limit;

  projects;

  constructor( ) { 
    
  }

  ngOnInit(): void {

  }

}

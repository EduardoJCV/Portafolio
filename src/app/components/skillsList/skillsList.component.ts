import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills/skills.service';

import { SkillSectionModel } from '../../models/skill.model';

@Component({
  selector: 'app-skillsList',
  templateUrl: './skillsList.component.html',
  styleUrls: ['./skillsList.component.css']
})
export class SkillsListComponent {


  constructor( public skillService:SkillsService ) {

  }

}

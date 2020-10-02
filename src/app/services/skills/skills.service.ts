import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { SkillSectionModel, SkillModel } from '../../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {


  url = 'http://damp-harbor-08844.herokuapp.com/api/skillslist';

  skillsList:SkillSectionModel[];

  skillsLAprendiendo = {
    Frontend: false,
    Backend: false,
    Database: false,
    MD: false,
    Otros: false
  }

  constructor( private httpClient: HttpClient ) {

    this.skills().subscribe( (res:SkillSectionModel[]) =>{

      for (let i = 0; i < res.length; i++) {

        res[i].aprendiendo = [];

        for (let a = 0; a < res[i].skills.length; a++) {
          
          res[i].skills[a].level = Number(res[i].skills[a].level);

          if ( res[i].skills[a].level < 50 ) {

            res[i].aprendiendo.push( res[i].skills[a] );

            res[i].skills.splice( a, 1 );
            
          }
          
        }
      }

      this.skillsList = res;
    });

  }

  private skills(): Observable<SkillSectionModel[]> {
    return this.httpClient.get<SkillSectionModel[]>(`${this.url}`);
  }

}

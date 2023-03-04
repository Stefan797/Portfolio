import { Component, OnInit } from '@angular/core';
import { allSkills } from '../skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  allSkills: Object[] = [];

  constructor() { }

  ngOnInit(): void {
    allSkills.forEach((skill) => {
      this.allSkills.push(Object.assign({}, skill));
    });
  }
}

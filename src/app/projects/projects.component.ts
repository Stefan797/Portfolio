import { Component, OnInit } from '@angular/core';
import { allProjects } from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  allProjects: Object[] = [];
  dataaos = ['fade-right', 'fade-left', 'fade-right', 'fade-left'];
  
  constructor() {}

  ngOnInit(): void {
    allProjects.forEach((project) => {
      this.allProjects.push(Object.assign({}, project));
      console.log(project);
    });
  }

  getdata(index) {
    console.log(index);
    index = this.dataaos[index];
    return this.dataaos[index];
  }

  visitProject(url: string) {
    window.open(url, "_blank");
  }
}

import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { allProjects } from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  allProjects: Object[] = [];
  dataaos = ['fade-right', 'fade-left', 'fade-right', 'fade-left'];
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setAttribute(elementRef.nativeElement, 'img', 'data-aos');
  }

  ngOnInit(): void {
    allProjects.forEach((project) => {
      this.allProjects.push(Object.assign({}, project));
    });
  }

  getdata(index) {
    // console.log(index);
    index = this.dataaos[index];
    return index;
  }

  visitProject(url: string) {
    window.open(url, "_blank");
  }
}

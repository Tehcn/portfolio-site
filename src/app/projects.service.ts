import { Injectable } from '@angular/core';
import { Project } from './projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: "01",
      name: 'Portfolio',
      description: 'My Portfolio is an Angular application where I can showcase other applications.',
      status: 'Finished',
      createdOn: new Date(2021, 7, 9, 4, 44, 0),
      image: 'assets/logo.png',
      link: "#"
    },
    {
      id: "02",
      name: 'MakingSchoolEasier',
      description: 'MakingSchoolEasier is a interactive learning application with video lessons that explain complex topics simply.',
      status: 'In Progress',
      createdOn: new Date(2021, 7, 9, 4, 44, 0),
      image: 'https://makingschooleasier.com/logo.png',
      link: "https://makingschooleasier.com/"
    },
    {
      id: "03",
      name: "ProjectValkyrie",
      description: 'ProjectValkyrie is a Minecraft mod and Discord bot to track Hypixel Skyblock Stats.',
      status: 'In Progress',
      createdOn: new Date(2021, 7, 9, 4, 44, 0),
      image: 'https://i.imgur.com/kUd7hQG.png',
      link: "https://tehcn.github.io/project-valkyrie/"
    },
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
}

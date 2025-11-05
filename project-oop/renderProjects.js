
import { Projects } from "./projects.js";

export class RenderProjects{
  constructor(selector){
    this.projects = new Projects(selector);
    this.allProjects = this.projects.allProjects; 
  }
  render(items){
    this.projects.render(items)
  }
}

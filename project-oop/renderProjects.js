
import { Projects } from "./projects.js";

export class RenderProjects{
  constructor(selector){
    this.projects = new Projects(selector);
  }
  render(items){
    this.projects.render(items)
  }
}

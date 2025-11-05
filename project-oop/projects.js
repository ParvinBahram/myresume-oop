import { projectItems } from "../data.js";
import { Project } from "./project.js";

export class Projects {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.allProjects = projectItems;   
  }

  render(items) {
    if (!Array.isArray(items)) {
      items = this.allProjects || [];
    }

    if (!this.container) return;

    const projectsList = items.map(project => {
        const projectCard = new Project(project);
        return projectCard.render(); 
      }).join("");

    const projectsGrid = `
      <div class="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        ${projectsList}
      </div>
    `;

    this.container.innerHTML = projectsGrid;
  }
}

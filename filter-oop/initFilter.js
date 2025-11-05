import { CategoryFilter } from "./category.js";
import {DateFilter} from "./date.js";
import { CompletedFilter } from "./status.js";

export class InitFilter {
  constructor(filterContainerSelector, projectsInstance) {
    this.filterContainer = document.querySelector(filterContainerSelector);
    this.Projects = projectsInstance;

    this.categoryFilter = new CategoryFilter(this.Projects);

    this.dateFilter = new DateFilter(this.Projects);

    this.completeFilter = new CompletedFilter(this.Projects);
  }
}

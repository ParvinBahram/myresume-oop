import { projectItems } from "../data.js";

export class CategoryFilter {
  constructor(projectsInstance) {
      this.projects = projectsInstance;
      this.buttons = document.querySelectorAll(".btn-filter");
      this.categoryBtn = document.getElementById("category-btn");
      this.categoryMenu = document.getElementById("category-menu");
      this.selectedCategories = new Set ();
      this.init();
  }

  init() {
    if (this.categoryBtn && this.categoryMenu) {
      this.categoryBtn.addEventListener("click", () => {
        this.categoryMenu.classList.toggle("hidden");
      });
    }

    this.buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active-btn-filter")
        const category = btn.dataset.category;

        if (category === "all") {
          this.selectedCategories.clear();
          this.buttons.forEach((b) => b.classList.remove("active-filter-btn"));
          this.projects.render(this.projects.allProjects);
          return;
        }
          if (this.selectedCategories.has(category)) {
          this.selectedCategories.delete(category);
          btn.classList.remove("active-btn-filter");
        } else {
          this.selectedCategories.add(category);
          btn.classList.add("active-btn-filter");
        }

        if (this.selectedCategories.size === 0) {
          this.projects.render(this.projects.allProjects);
        } else {
          const filtered = this.projects.allProjects.filter((p) =>
            this.selectedCategories.has(p.category)
          );
          this.projects.render(filtered);
        }

      });
    });
  }
}


export class CompletedFilter{
    constructor(projectsInstance){
        this.projects = projectsInstance ;
        this.completeToggle = document.getElementById("complete-toggle");
        this.init();
    }

    init(){
        this.completeToggle.addEventListener("change", ()=> this.filterCompleted());
    }

    filterCompleted(){
        const allProjects = this.projects.allProjects || [];

        if(this.completeToggle.checked){
            const completedProjects = this.projects.allProjects.filter((item)=> item.completed === true);
            this.projects.render(completedProjects);
        }else {
            this.projects.render(allProjects)
        }

    }
}
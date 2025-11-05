
export class DateFilter {
    constructor(projectsInstance){
        this.projects = projectsInstance;

        this.filterDateBtn = document.getElementById("filterDateBtn");
        this.startDateInput = document.getElementById("startDate");
        this.endDateInput = document.getElementById("endDate");
        this.startDateLabel = document.getElementById("startDateLabel");
        this.endDateLabel = document.getElementById("endDateLabel");
        this.dateMessage = document.getElementById("dateMessage");

        this.today = new Date();
        this.baseDate = new Date();
        this.baseDate.setDate(this.today.getDate() - 1000);

        this.init();
    }

    init(){
        if(!this.startDateInput || !this.endDateInput || !this.filterDateBtn) return;

        this.updateLabels();

        this.startDateInput.addEventListener("input", ()=> this.updateLabels());
        this.endDateInput.addEventListener("input", () => this.updateLabels());

        this.filterDateBtn.addEventListener("click",()=> this.filterByDate());
    }

     updateLabels() {
    const startOffset = parseInt(this.startDateInput.value, 10);
    const endOffset = parseInt(this.endDateInput.value, 10);

    const start = new Date(this.baseDate);
    start.setDate(this.baseDate.getDate() + startOffset);

    const end = new Date(this.baseDate);
    end.setDate(this.baseDate.getDate() + endOffset);

    this.startDateLabel.textContent = start.toLocaleDateString("en-US");
    this.endDateLabel.textContent = end.toLocaleDateString("en-US");
  }

  filterByDate(){

    const startOffset = parseInt(this.startDateInput.value, 10);
    const endOffset = parseInt(this.endDateInput.value, 10);

    if (startOffset > endOffset) {
      alert("تاریخ شروع نباید از تاریخ پایان بیشتر باشد.");
      return;
    }

    const startDate = new Date(this.baseDate);
    startDate.setDate(this.baseDate.getDate() + startOffset);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(this.baseDate);
    endDate.setDate(this.baseDate.getDate() + endOffset);
    endDate.setHours(23, 59, 59, 999);

    const filtered = this.projects.allProjects.filter((item) => {
      const itemDate = new Date(item.createdAt);
      return itemDate >= startDate && itemDate <= endDate;
    });

    if (filtered.length === 0) {
    //   this.dateMessage.textContent = "پروژه‌ای در این بازه‌ی زمانی وجود ندارد.";
      this.projects.render([]); 
    } else {
      this.projects.render(filtered);
    }
  }
}
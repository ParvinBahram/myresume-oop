
export class Project{
  constructor(item){
    this.title = item.title;
    this.description = item.description;
    this.category = item.category;
    this.completed = item.completed;
    this.createdAt = item.createdAt;
    this.link = item.link;
  }
  render(){
     return `<div class="project-item outline-0 shadow-lg rounded-xl px-6 py-4 bg-gray-200  mx-auto">
        <h2 class="text-xl text-purple-900">${this.title}</h2>
       <div class=" mt-2 flex items-center justify-between ">
       <p class="status">${this.completed ? "تکمیل شده" : "در حال اجرا"}<p/>
       <p class="badge"> ${this.category}</p></div>
        <p class="dark:text-black pt-4 pb-2 border-b border-b-gray-300">${this.description}</p>
        <span class="pt-2  block text-left text-gray-600 text-sm">${this.createdAt}</span>
        <a class="text-left block text-gray-600 pt-2 text-sm hover:text-gray-400" href=${this.link} target="_blank" rel="noopener noreferrer">${this.link}</a>
      </div>`;
  }
}


 



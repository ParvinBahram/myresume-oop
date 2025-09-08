

export class HeroSection {
  constructor(data){
    this.header = data.header;
    this.name = data.name;
    this.job = data.job;
    this.education = data.education;
    this.experience = data.experience;
    this.skills = data.skills;
    this.aboutLink = data.aboutLink;
    this.imageSrc = data.imageSrc;
  }

  render(){
    return `
      <div class="bg-gradient-to-r from-purple-400 to-purple-100 dark:bg-none mt-8 rounded-2xl md:[border-radius:5%_5%_60%_60%] shadow-2xl flex flex-col md:flex-row items-center md:gap-x-16 justify-between pt-10 pb-25 px-16">
      <div class="">
       <h1 class="text-3xl pb-4 font-bold mt-8">${this.header}</h1>
          <h2 class="text-2xl">${this.name} هستم ${this.job}، ${this.education}</h2>
          <h3 class="text-xl  py-6">${this.experience }برنامهایی را با ${this.skills.join(" ")} توسعه دادم</h3>
          <a href="${this.aboutLink}" target="_blank" class="btn border-0 outline-0 md:mr-32 w-full md:w-auto"> درباره من</a>
        </div>
        <div class="flex justify-center">
          <img src="${this.imageSrc}" alt="my-picture"
          class="rounded-full object-cover w-[50%] h-[50%] md:w-[90%] md:h-[90%] lg:w-[70%] md:h-[70%] items-center object-center mt-10 md:mt-0 shadow-2xl" />
      </div>
      </div>
    `
  }
}

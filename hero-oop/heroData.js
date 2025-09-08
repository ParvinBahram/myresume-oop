
export class HeroData{
  constructor(){
     this.header = "سلام به سایت من خوش اومدین";
    this.name = "پروین بهرام";
    this.job = "برنامه نویس فرانت اند";
    this.education = "کارشناسی مهندسی نرم افزار دانشگاه پیام‌نور شهریار";
    this.experience = "مدت یک ساله که فعالیت خودمو در زمینه برنامه نویسی فرانت اند شروع کردم و ";
    this.skills = ["Html-Css", "Tailwind", "JavaScript", "React"];
    this.aboutLink = "../aboutMe.html";
    this.imageSrc = "../assets/images/me.webp";
  }

  getData() {
    return {
      header: this.header,
      name: this.name,
      job: this.job,
      education: this.education,
      experience: this.experience,
      skills: this.skills,
      aboutLink: this.aboutLink,
      imageSrc: this.imageSrc,
    };
  }
}
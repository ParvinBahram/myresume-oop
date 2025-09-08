
import { HeroSection } from "./heroSection.js";
import { HeroData } from "./heroData.js";


export class Hero{
  constructor(selector){
    this.container = document.querySelector(selector);

    const heroData = new HeroData();
    this.data = heroData.getData();

    this.heroSection = new HeroSection(this.data);
  }

  render(){
    this.container.innerHTML = this.heroSection.render()
  }

  init(){
    this.render();
  }
}
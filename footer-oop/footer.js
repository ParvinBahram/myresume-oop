
import { Info } from "./info.js";
import { Form } from "./form.js";


export class Footer {
  constructor(){
    this.contactSection= document.querySelector("#contact-section");
    this.info = new Info();
    this.form = new Form();
  }
render (){
  this.contactSection.appendChild(this.info.render());
  this.contactSection.appendChild(this.form.render());
  this.form.init();
  if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
}
}
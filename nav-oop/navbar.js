
import {Logo} from "./logo.js";
import { ThemeToggle } from "./themeToggle.js";
import { MobileMenu } from "./mobileMenu.js";
import { NavLinks } from "./navLinks.js";


// navbar class:
export  class Navbar{
  constructor(selector){
   this.selector = selector;
   this.logo= new Logo("../assets/images/Logo1.png");
   this.toggle= new ThemeToggle();
   this.moblieMenu= new MobileMenu();
   this.navlinks= new NavLinks();
   this.nav = document.querySelector(this.selector);
}

render(){
  this.nav.innerHTML = `
     ${this.logo.render()}
     ${this.toggle.render()}
     ${this.moblieMenu.render()}
     ${this.navlinks.render()}`
     ;
     lucide.createIcons();
    }

    init(){
     this.render() 
     this.toggle.init();
     this.moblieMenu.init()
     this.navlinks.init();
    }
}



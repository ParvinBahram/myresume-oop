
import { Navbar } from "./nav-oop/navbar.js";
import { Hero } from "./hero-oop/initHero.js"
import { RenderProjects } from "./project-oop/renderProjects.js";
import { Footer} from "./footer-oop/footer.js"

document.addEventListener("DOMContentLoaded", ()=>{
 const navbar = new Navbar("#nav")
  navbar.init();

  const hero = new Hero("#hero");
  hero.init();

  const projects = new RenderProjects("#projects");
  projects.render()

  
  const footer = new Footer();
  footer.render();
  
});


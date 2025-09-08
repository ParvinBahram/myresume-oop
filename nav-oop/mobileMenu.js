
export class MobileMenu {
  constructor() {
    this.toggler = null;
    this.menuIcon = null;
    this.closeBtn = null;
    this.navLinks = null;
  }
  render() {
    return `
      <div id="toggler" class="px-2 md:hidden">
        <div class="mobile-menu">
          <i data-lucide="menu" class="text-purple-500 w-12 h-12" aria-hidden="true"></i>
        </div>
        <div class="closeBtn hidden">
          <i data-lucide="x" class="w-12 h-12 text-purple-500"></i>
        </div>
      </div>
    `;
  }
  init() {
    this.toggler = document.getElementById("toggler");
    if (!this.toggler) return;

    this.menuIcon = this.toggler.querySelector(".mobile-menu");
    this.closeBtn = this.toggler.querySelector(".closeBtn");
    this.navLinks = document.querySelector(".nav_links");

    this.menuIcon.addEventListener("click", () => {
      this.navLinks.classList.add("open");
      this.menuIcon.classList.add("hidden");
      this.closeBtn.classList.remove("hidden");
    });

    this.closeBtn.addEventListener("click", () => {
      this.navLinks.classList.remove("open");
      this.menuIcon.classList.remove("hidden");
      this.closeBtn.classList.add("hidden");
    });
  }
}

export class NavLinks{
  render(){
    return`<ul class="nav_links ">
        <li class="item dropdown relative cursor-pointer"><a href="#" class="link dropdown-link flex items-center" target="_blank">خدمات
        <span><i data-lucide="chevron-left" class="hover:text-purple-600
         rotate-0 md:-rotate-90 transition-transform duration-200 delay-200 md:pr-2"></i></span></a>
         <div class="dropdown-menu absolute opacity-0 transition-all duration-300 transform translate-y-2 invisible rounded-lg p-4  shadow-lg  top-0 right-25 bg-purple-100 outline-none md:top-10 md:-right-18 md:w-50">
          <a class="dropdown-item" href="#">طراحی سایت با کدنویسی</a>
          <a class="dropdown-item" href="#">طراحی سایت با وردپرس</a>
          <a class="dropdown-item" href="#">سئو و پشتیبانی</a>
         </div>
      </li>
        <li class="item"><a class="link" href="#main">پروژه ها</a></li>
        <li class="item md:hidden"><a class="btn w-full" href="#footer">ارتباط با من</a></li>
      </ul>
      <a class="btn hidden md:block items-center" href="#footer">ارتباط با من</a>

    `
  }
  init(){
  const dropDown = document.querySelector(".dropdown");
  const dropDownMenu = document.querySelector(".dropdown-menu");
     if (!dropDown || !dropDownMenu) return;
function showMenu() {
  dropDownMenu.classList.remove("opacity-0", "invisible", "translate-y-2");
  dropDownMenu.classList.add("opacity-100", "visible", "translate-y-0");
}
function hideMenu() {
  dropDownMenu.classList.remove("opacity-100", "visible", "translate-y-0");
  dropDownMenu.classList.add("opacity-0", "invisible", "translate-y-2");
}

dropDown.addEventListener("mouseenter", showMenu);
dropDown.addEventListener("mouseleave", hideMenu);
}
}
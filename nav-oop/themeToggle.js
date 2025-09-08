
 export class ThemeToggle {
   render(){
    return `
      <div class="flex justify-center items-center py-8">
      <label for="theme-toggle" class="flex items-center cursor-pointer">
      <div class="relative">
      <input id="theme-toggle" type="checkbox" class="sr-only peer" aria-label="themeToggle" >
      <div class="w-14 h-8 bg-gray-300 peer-checked:bg-blue-700 dark:bg-gray-600 rounded-full transition-colors"></div>
      <div class="absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transition-transform peer-checked:translate-x-6"></div>
      </div>
      </label>
    </div>
    `}
    init(){
       const toggleTheme= document.getElementById("theme-toggle");
       const htmlEl = document.documentElement;
       if(!toggleTheme) return;
      const savedTheme = localStorage.getItem("theme");
      const preferDark =window.matchMedia("(prefers-color-scheme:dark)").matches;
      if(savedTheme === 'dark' ||(!savedTheme && preferDark)){
        htmlEl.classList.add('dark');
        localStorage.setItem("theme", "dark");
      }else{
        htmlEl.classList.remove('dark');
        localStorage.setItem("theme", "light")
      }
      const currentTheme = localStorage.getItem('theme');
      if(currentTheme==="dark" ||(!currentTheme && preferDark)) toggleTheme.checked = true;
      toggleTheme.addEventListener("change", ()=> {
      if(toggleTheme.checked){
      htmlEl.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
      htmlEl.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  })
    }
}
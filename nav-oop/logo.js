
export class Logo {
  constructor(src){
    this.src = src;
  }
render(){
return `
  <div>
    <img src=${this.src} alt="logo" class="w-24 h-24">
  </div>
`
}}
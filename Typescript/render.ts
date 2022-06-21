export class Render {
  //instance way 
  // use when we have a lot a people to instanciate

  //static way 
  // here is notihing instancited only by itself
  // use when only need one thing of the class
  // IF ONLY NEED ONE! ! - used most in utility functions
  static viewTemplate: HTMLDivElement

  static render(html:string){
    Render.viewTemplate.innerHTML = html
  }
}
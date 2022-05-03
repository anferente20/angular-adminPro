import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettigsService {

  public url: string = '';
  //Style where the color is defined
  public linkTheme = document.querySelector('#theme');

  constructor() {
    this.url = localStorage.getItem('theme') || './assets/css/colors/red-dark.css' ;
    this.linkTheme?.setAttribute('href',this.url);
    localStorage.setItem('theme', this.url);

    this.setCurrentTheme();    
  }

  public changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme', url);
    this.setCurrentTheme();
  }

  public setCurrentTheme() {

    const themeColors  = document.querySelectorAll('.selector');
    themeColors.forEach( themeColor => {
      //Remove current theme marker
      themeColor.classList.remove('working');

      //get the new current theme
      const btnTheme = themeColor.getAttribute('data-theme');
      const url = `./assets/css/colors/${btnTheme}.css`

      const currentTheme = this.linkTheme?.getAttribute('href');
       if ( url === currentTheme ) {
         themeColor.classList.add('working');
       }
    })
  }
}

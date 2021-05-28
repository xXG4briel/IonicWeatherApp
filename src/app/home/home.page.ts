import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public clima: object;

  constructor() { }

  ngOnInit() {
    this.showSnow();
  }
  showSnow(){
    this.clima = {
      local: 'São Paulo SP - Brazil',
      temperatura: 24,
      sensacao: 36,
      img: 'assets/img/winter.svg',
      icone: 'assets/img/snow.svg',
      color: 'cinza'
    }
    document.querySelector<HTMLElement>('.container').style.background="#e3e3e3";
  }

  showSun(){
    this.clima = {
      local: 'Salvador BA - Brazil',
      temperatura: 36,
      sensacao: 42,
      img: 'assets/img/summer.svg',
      icone: 'assets/img/sun.svg',
      color: 'laranja'
    }
    document.querySelector<HTMLElement>('.container').style.background="#fff3f3";
    
  }
  showRain(){
    this.clima = {
      local: 'Santa Catarina SA - Brazil',
      temperatura: 15,
      sensacao: 18,
      img: 'assets/img/rain.svg',
      icone: 'assets/img/raining.svg',
      color: 'azul'
    }
    document.querySelector<HTMLElement>('.container').style.background="#ebfafd";
  }
}

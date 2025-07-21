import { Component, computed, signal } from "@angular/core";


@Component({
  templateUrl: './hero.html'
})


export class HeroPageComponent{

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const descripton = `${this.name()} - ${this.age()}`;
    return descripton;
  })

  capitalizedName = computed(() => {
    const capitalizedName = `${this.name().toUpperCase()}`;
    return capitalizedName
  })

  getHeroDescription(){
    return `${ this.name() } - ${ this.age() }`
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAgeHero(){
    this.age.set(60);
  }



  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

}

import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

interface Character {
  id: number;
  name: string;
  power: number;
}



@Component({
  templateUrl: './dragonball.html',
  // imports: [ NgClass ]
  selector: 'dragonball'
})

export class dragonBallComponent{

  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    // { id: 2, name: 'Vegeta', power: 9000},
    // { id: 3, name: 'Piccolo', power: 3000},
    // { id: 4, name: 'Yamcha', power: 500},

  ]);

  addCharacter(){


     if( !this.name() || !this.power() || this.power() <= 0){
       return;
     }else{
       const newCharacter: Character = {
        id: this.characters().length +1,
        name: this.name(),
        power: this.power(),
       };

       this.characters.update(
        (list) => [...list, newCharacter]
       )
       this.resetFields();
     }
  }

  resetFields(){
    this.name.set('');
    this.power.set(0)
  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // })
}

import { Component, inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/shared/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/shared/dragonball/character-add/character-add.component";
import { DragonBallService } from '../../services/dragonball.service';


@Component({
  templateUrl: './dragonball-super.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent]
})

export class dragonBallSuperComponent{

  public dragonBallService = inject(DragonBallService)


}

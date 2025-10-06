import { ChangeDetectionStrategy, Component } from '@angular/core';
import SearchComponent from "../../components/search/search.component";


@Component({
  selector: 'app-home-page',
  imports: [SearchComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {


 }

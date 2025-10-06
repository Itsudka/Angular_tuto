import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarMenuComponent } from "../../components/navbar/navbar-menu/navbar-menu.component";






@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet, NavbarMenuComponent],
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export default class MainPageComponent {


 }

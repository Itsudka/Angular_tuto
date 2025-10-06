import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavbarMenuOptions {
  label: string;
  route: string;

}


@Component({
  selector: 'navbar-menu-options',
  imports: [RouterLink],
  templateUrl: './navbar-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMenuOptionsComponent {

  navBarOptions : NavbarMenuOptions[] = [
    { label: 'Home', route: '/main-page/home' },
    { label: 'Categories', route: '/main-page/categories' },
  ]
}

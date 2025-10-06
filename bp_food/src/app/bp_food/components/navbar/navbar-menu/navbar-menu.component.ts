import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarMenuLogoComponent } from "./navbar-menu-logo/navbar-menu-logo.component";
import { NavbarMenuOptionsComponent } from './navbar-menu-options/navbar-menu-options.component';

@Component({
  selector: 'navbar-menu',
  imports: [NavbarMenuLogoComponent, NavbarMenuOptionsComponent],
  templateUrl: './navbar-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMenuComponent { }

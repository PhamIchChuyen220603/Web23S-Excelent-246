import { MenuItemModel } from './../../../../../../node_modules/@syncfusion/ej2-navigations/src/common/menu-base-model.d';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, protected authService: AuthService) {}

  menuItems: MenuItemModel[] | any = [
    {
      text: 'File',
      items: [
        { text: 'Open',id: 'open'},
        { text: 'Save',},
        { text: 'Exit' },
      ],
    },
    {
      text: 'Edit',
      items: [
        { text: 'Cut'},
        { text: 'Copy'},
        { text: 'Paste'},
      ],
    },
    {
      text: 'View',
      items: [
        { text: 'Toolbar' },
        { text: 'Sidebar' },
        { text: 'Full Screen' },
      ],
    },
    {
      text: 'Tools',
      items: [
        { text: 'Spelling & Grammar' },
        { text: 'Customize' },
        { text: 'Options' },
      ],
    },
    { text: 'Go' },
    { text: 'Help' },
  ];

  subItem1 = document.createElement('e-menu-item');
  // open = document.getElementById('open')

  openN(){
    let open:HTMLElement = document.getElementById(this.menuItems[0].items[0]) as HTMLElement;
    console.log(open);
  }


  navigateToHome() {
    this.router.navigate(['home']);
  }
}

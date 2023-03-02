import { MenuItemModel } from './../../../../../../node_modules/@syncfusion/ej2-navigations/src/common/menu-base-model.d';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
// import { MenuClickEventArgs } from '@syncfusion/ej2-angular-filemanager';
import { MatDialog } from '@angular/material/dialog';
import { OpenFileDialogComponent } from '../open-file-dialog/open-file-dialog.component';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, protected authService: AuthService, private dailog: MatDialog, protected fileService: FileService) {}

  @ViewChild('menu') menu!: ElementRef;


  open(){
    this.dailog.open(OpenFileDialogComponent);
  }

  ngAfterViewInit() {
    // console.log(this.menu);
  }

  menuItemText: string[] = [
    'Open',
    'Save',
    'Exit',
    'Cut',
    'Copy',
    'Paste',
    'Toolbar',
    'Sidebar',
    'Full Screen',
    'Spelling & Grammar',
    'Customize',
    'Options',
  ];

  menuItems: MenuItemModel[] | any = [
    {
      text: 'File',
      items: [
        { text: 'Open',},
        { text: 'Save',},
        { text: 'Exit', },

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
  ];


  openN(args: MenuEventArgs){
    let temp = this.menuItemText.find((item) => item == args.item.text);
    if(temp == 'Open'){
      this.open();
    }
  }


  navigateToHome() {
    this.router.navigate(['home']);
  }
}

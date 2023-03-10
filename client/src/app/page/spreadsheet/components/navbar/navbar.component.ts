import { ShareDialogComponent } from './../share-dialog/share-dialog.component';
import { MenuItemModel } from './../../../../../../node_modules/@syncfusion/ej2-navigations/src/common/menu-base-model.d';
import { Component, ElementRef, ViewChild, HostListener, Input, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
// import { MenuClickEventArgs } from '@syncfusion/ej2-angular-filemanager';
import { MatDialog } from '@angular/material/dialog';
import { OpenFileDialogComponent } from '../open-file-dialog/open-file-dialog.component';
import { FileService } from 'src/app/service/file.service';
import { Store } from '@ngrx/store';
import { FileState } from 'src/ngrx/states/file.states';
import { Observable } from 'rxjs';
import { FileActions } from 'src/ngrx/actions/file.actions';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{
  public isEditing: boolean;
  public pendingValue!: string;
  public title = '';
  public valueChangeEvents: EventEmitter<string>;
  files$: Observable<FileState>;


  constructor(private eRef: ElementRef, private router: Router,
    protected authService: AuthService, private dailog: MatDialog,
    protected fileService: FileService,
    private store: Store<{ file: FileState }>) {
    // this.title = this.fileService.currentFile.title!;
    this.isEditing = false;
    this.valueChangeEvents = new EventEmitter();
    this.files$ = this.store.select('file');
    // this.store.dispatch(FileActions.getFilesByUserId({ userId: this.userId! }));
    // this.files$.subscribe((res) => {
    //   console.log(res);
    // })
  }

  ngOnInit(): void {
    // this.title = this.fileService.currentFile.title!;
    console.log(this.fileService.currentFile)
    console.log(this.fileService.idParam);
  }

  @ViewChild('menu') menu!: ElementRef;



  open() {
    this.dailog.open(OpenFileDialogComponent);
  }
  share() {
    this.dailog.open(ShareDialogComponent);
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
        { text: 'Open', },
        { text: 'Save', },
        { text: 'Exit', },

      ],
    },
    {
      text: 'Edit',
      items: [
        { text: 'Cut' },
        { text: 'Copy' },
        { text: 'Paste' },
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


  openN(args: MenuEventArgs) {
    let temp = this.menuItemText.find((item) => item == args.item.text);
    if (temp == 'Open') {
      this.open();
    }
  }



  // I cancel the editing of the value.
  public cancel(): void {

    this.isEditing = false;

  }


  // I enable the editing of the value.
  public edit(): void {

    this.pendingValue = this.title;
    this.isEditing = true;

  }

  // I process changes to the pending value.
  public processChanges(): void {

    // If the value actually changed, emit the change but don't change the local
    // value - we don't want to break unidirectional data-flow.
    if (this.pendingValue !== this.title) {

      this.valueChangeEvents.emit(this.pendingValue);

    }

    this.isEditing = false;

  }

}

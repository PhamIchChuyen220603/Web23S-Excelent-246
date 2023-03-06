import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { FileActions } from 'src/ngrx/actions/file.actions';
import { AuthState } from 'src/ngrx/states/auth.states';
import { FileState } from 'src/ngrx/states/file.states';
import { MatMenuModule } from '@angular/material/menu';
import { Route, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  id!: string | undefined;
  userId!: string | null;
  files$: Observable<FileState>;
  auth$ = this.store.select('auth');
  constructor(
    private fileService: FileService,
    private store: Store<{ auth: AuthState; file: FileState }>,
    private route: Router
  ) {
    this.auth$.subscribe((res) => {
      this.userId = res.user?.userId!;
    });
    this.files$ = this.store.select('file');
    this.store.dispatch(FileActions.getFilesByUserId({ userId: this.userId! }));
    this.files$.subscribe((res) => {
      console.log(res);
    });
  }

  selectFile(fileId: string) {
    console.log(fileId);
    this.route.navigate([`/spreadsheet/${fileId}`]);
  }

  canRename(ownerId: string) {
    if (ownerId == this.userId) return true;
    else return false;
  }

  deleleFile(fileId: string) {
    // if(fileId == )c
    console.log(fileId);
    this.fileService.deleteFile(fileId);
  }

  testString!: string;

  test() {
    return 'check';
  }

  checkOption() {
    this.testString = this.test();
  }

  // Test Paginator

  // ELEMENT_DATA: PeriodicElement[] = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ];

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  // @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort!: MatSort;

  // export interface PeriodicElement {
  //   name: string;
  //   position: number;
  //   weight: number;
  //   symbol: string;
  // }

  // ngOnInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
}

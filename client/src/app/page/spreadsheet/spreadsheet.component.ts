import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { beforeDownload, BeforeDownloadEventArgs, BeforeSendEventArgs, DownloadArgs } from '@syncfusion/ej2-angular-filemanager';
import { BeforeSaveEventArgs, BeforeOpenEventArgs, SaveCompleteEventArgs, DataValidation } from '@syncfusion/ej2-angular-spreadsheet';
import { DocumentData } from 'firebase/firestore';
import * as XLSX from 'xlsx';
import { Adaptor, DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SpreadsheetComponent {


  constructor() { }

  watchDoc!: Subscription


  // @ViewChild('spreadsheet') public spreadsheetObj!: SpreadsheetComponent;
  //   public query: Query = new Query().select(['OrderID', 'CustomerID', 'ShipName', 'ShipCity', 'ShipCountry', 'Freight']).take(200);
  //   public data: DataManager = new DataManager({
  //       url: 'https://js.syncfusion.com/demos/ejServices//wcf/Northwind.svc/Orders',
  //       crossDomain: true
  //   });
  //   ngOnInit(): void {
  //       this.data = this.data;
  //   }


  // @ViewChild('spreadsheet') spreadsheetObj!: SpreadsheetComponent;
  // remoteData: DataManager = new DataManager({
  //   url:'https://ej2services.syncfusion.com/production/web-services/api/Orders',
  //   adaptor: new WebApiAdaptor(),
  //   crossDomain: true,
  // })
  // data: any = [];
  openUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open';
  saveUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save';



  // //get data from spreadsheet after save
  // beforeSave(event: BeforeOpenEventArgs) {
  //   console.log(event.file);

  //   }
  // afterSave(event: SaveCompleteEventArgs){
  //   console.log(event);
  // }

  //   beforeCreate(event: BeforeSendEventArgs) {
  //     console.log(event.action);
  //   }

  //   beforeOpen(event: BeforeOpenEventArgs) {
  //     console.log(event);
  //   }

  // afterDown(event: SaveCompleteEventArgs){
  //   console.log(event.url);
  // }


}

  // beforeOpen(event: BeforeOpenEventArgs){
  //   console.log(event);
  // }


  // saveFile = new Spreadsheet({saveComplete: (args: SaveCompleteEventArgs) => {
  //   if(args.status === 'Success'){
  //     args.saveType = 'Xlsx';
  //     args.fileName = "Hello"
  //     args.url = this.saveUrl;
  //     this.action.save(args);
  //   }
  // }})
  // actionBegin = new Spreadsheet({
  //   actionBegin:(args: BeforeCellFormatArgs|BeforeOpenEventArgs|BeforeSaveEventArgs|BeforeSelectEventArgs
  //     |BeforeSortEventArgs|CellEditEventArgs|MenuSelectEventArgs) => {
  //       console.log(args);
  //     }
  // }, '#spreadsheet');

  // saveComplete =  new Spreadsheet({saveComplete: (args: SaveCompleteEventArgs) => {
  //   return args;
  // }},'#spreadsheet')


  // saveComplete(args: SaveCompleteEventArgs) {
  //   console.log(args.fileName);
  // }


  // @ViewChild('default')

  // public saveUrl = "https://console.firebase.google.com/project/testexcel-26cad/database/testexcel-26cad-default-rtdb/data/"
  // public openUrl = "https://testexcel-26cad-default-rtdb.asia-southeast1.firebasedatabase.app/"

  // created() {
  //     this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
  //     this.spreadsheetObj.cellFormat({
  //       fontWeight: 'bold',
  //       textAlign: '',
  //       verticalAlign: ''
  //     }, 'E31:F31');
  //     this.spreadsheetObj.cellFormat({
  //       textAlign: 'right',
  //       fontWeight: '',
  //       verticalAlign: ''
  //     }, 'E31');
  //     this.spreadsheetObj.numberFormat('$#,##0.00', 'F2:F31');
  // }
  // cellFormat(arg0: { fontWeight: string; textAlign: string; verticalAlign: string; }, arg1: string) {
  //   throw new Error('Method not implemented.');
  // }
  // numberFormat(arg0: string, arg1: string) {
  //   throw new Error('Method not implemented.');
  // }


  // save(event: any){
  //   console.log(event);
  // }


  // arr: Array<any> = []
  // getData(event: any) {
  //   //find index in array that match event.address
  //   let index = this.arr.findIndex((item: any) => item.address === event.address)
  //   //if index is -1, then push new object to array
  //   if (index === -1) {
  //     this.arr.push(event)
  //   }
  //   //if index is not -1, then update value of object in array
  //   else {
  //     this.arr[index].value = event.value
  //   }
  //   console.log(this.arr);
  // }

import { Component } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent {
  rows: Array<Array<any>> = [];
  currentCell: any = { value: '', row: 0, col: 0 };
  cellBlock: any = { start: { row: -1, col: -1 }, end: { row: -1, col: -1 } };

  isSelecting: boolean = false;

  maxRow: number = 101;
  maxCol: number = 21;
  constructor() {
    for (let i = 0; i < this.maxRow; i++) {
      let row = [];
      for (let j = 0; j < this.maxCol; j++) {
        row.push({ value: '' });
      }
      this.rows.push(row);
    }
    console.log(this.rows);
  }
  getColName(colIndex: number): string {
    let colName = '';
    while (colIndex >= 0) {
      colName = String.fromCharCode(65 + (colIndex % 26)) + colName;
      colIndex = Math.floor(colIndex / 26) - 1;
    }
    return colName;
  }

  selectCell(row: number, col: number) {
    console.log(row, col);
    this.currentCell.row = row;
    this.currentCell.col = col;
  }

  getCellStyle(row: number, col: number, currentCell: any): string[] {
    let classes = [];
    if (row === 0 && col !== 0) {
      classes.push('col-header');
    }
    if (col === 0 && row !== 0) {
      classes.push('row-header');
    }
    if ((col == currentCell.col && row == 0) || (row == currentCell.row && col == 0)) {
      classes.push('selected-header');
    }
    if (row == currentCell.row && col == currentCell.col) {
      classes.push('selected-cell');
    }
    if (row >= this.cellBlock.start.row && row <= this.cellBlock.end.row && col >= this.cellBlock.start.col && col <= this.cellBlock.end.col) {
      classes.push('selected-block');
    }
    return classes;
  }

  cellMouseDown(row: number, col: number) {
    console.log('cellMouseDown', row, col);
    this.cellBlock.start.row = row;
    this.cellBlock.start.col = col;
    this.cellBlock.end.row = row;
    this.cellBlock.end.col = col;
    this.isSelecting = true;
  }

  cellMouseMove(row: number, col: number) {

    if (!this.isSelecting) {
      return;
    }
    console.log('cellMouseMove', row, col);
    this.cellBlock.end.row = row;
    this.cellBlock.end.col = col;

    if (this.cellBlock.start.row > row || this.cellBlock.start.col > col) {
      let temp = this.cellBlock.start;
      this.cellBlock.start = this.cellBlock.end;
      this.cellBlock.end = temp;
    }
  }

  cellMouseUp(row: number, col: number) {
    console.log('cellMouseUp', row, col);
    this.cellMouseMove(row, col);
    this.isSelecting = false;
    console.log(this.cellBlock);
  }

  selectRow(row: number) {
    this.cellBlock.start.row = row;
    this.cellBlock.start.col = 1;
    this.cellBlock.end.row = row;
    this.cellBlock.end.col = this.maxCol - 1;
  }

  selectCol(col: number) {
    this.cellBlock.start.row = 1;
    this.cellBlock.start.col = col;
    this.cellBlock.end.row = this.maxRow - 1;
    this.cellBlock.end.col = col;
  }
  addRow() {
    for (let i = 0; i < this.maxRow - 1; i++) {
      let row = [];
      for (let j = 0; j < this.maxCol; j++) {
        row.push({ value: '' });
      }
      this.rows.push(row);
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniFileDialogComponent } from './mini-file-dialog.component';

describe('MiniFileDialogComponent', () => {
  let component: MiniFileDialogComponent;
  let fixture: ComponentFixture<MiniFileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniFileDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniFileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

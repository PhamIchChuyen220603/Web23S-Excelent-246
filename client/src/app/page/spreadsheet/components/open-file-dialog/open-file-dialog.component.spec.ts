import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFileDialogComponent } from './open-file-dialog.component';

describe('OpenFileDialogComponent', () => {
  let component: OpenFileDialogComponent;
  let fixture: ComponentFixture<OpenFileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenFileDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenFileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

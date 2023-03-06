import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniFileComponent } from './mini-file.component';

describe('MiniFileComponent', () => {
  let component: MiniFileComponent;
  let fixture: ComponentFixture<MiniFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

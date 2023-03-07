import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiniFileComponent } from './home-mini-file.component';

describe('HomeMiniFileComponent', () => {
  let component: HomeMiniFileComponent;
  let fixture: ComponentFixture<HomeMiniFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMiniFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMiniFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

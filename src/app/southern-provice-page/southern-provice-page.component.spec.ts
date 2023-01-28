import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthernProvicePageComponent } from './southern-provice-page.component';

describe('SouthernProvicePageComponent', () => {
  let component: SouthernProvicePageComponent;
  let fixture: ComponentFixture<SouthernProvicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthernProvicePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouthernProvicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

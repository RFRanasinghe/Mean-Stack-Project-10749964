import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthWesternPageComponent } from './north-western-page.component';

describe('NorthWesternPageComponent', () => {
  let component: NorthWesternPageComponent;
  let fixture: ComponentFixture<NorthWesternPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthWesternPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorthWesternPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

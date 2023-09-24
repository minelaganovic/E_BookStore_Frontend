import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnavuComponent } from './dashnavu.component';

describe('DashnavuComponent', () => {
  let component: DashnavuComponent;
  let fixture: ComponentFixture<DashnavuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashnavuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashnavuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

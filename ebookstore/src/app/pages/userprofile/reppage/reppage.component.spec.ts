import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppageComponent } from './reppage.component';

describe('ReppageComponent', () => {
  let component: ReppageComponent;
  let fixture: ComponentFixture<ReppageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReppageComponent]
    });
    fixture = TestBed.createComponent(ReppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpComponent } from './bookp.component';

describe('BookpComponent', () => {
  let component: BookpComponent;
  let fixture: ComponentFixture<BookpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookpComponent]
    });
    fixture = TestBed.createComponent(BookpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

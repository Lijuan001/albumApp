import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarInfiniteDisplayComponent } from './search-bar-infinite-display.component';

describe('SearchBarInfiniteDisplayComponent', () => {
  let component: SearchBarInfiniteDisplayComponent;
  let fixture: ComponentFixture<SearchBarInfiniteDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarInfiniteDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarInfiniteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

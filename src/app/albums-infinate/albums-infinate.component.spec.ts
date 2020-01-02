import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsInfinateComponent } from './albums-infinate.component';

describe('AlbumsInfinateComponent', () => {
  let component: AlbumsInfinateComponent;
  let fixture: ComponentFixture<AlbumsInfinateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsInfinateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsInfinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

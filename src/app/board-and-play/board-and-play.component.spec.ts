import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAndPlayComponent } from './board-and-play.component';

describe('BoardAndPlayComponent', () => {
  let component: BoardAndPlayComponent;
  let fixture: ComponentFixture<BoardAndPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAndPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAndPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

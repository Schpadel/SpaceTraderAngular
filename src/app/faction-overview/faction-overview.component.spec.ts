import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionOverviewComponent } from './faction-overview.component';

describe('FactionOverviewComponent', () => {
  let component: FactionOverviewComponent;
  let fixture: ComponentFixture<FactionOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactionOverviewComponent]
    });
    fixture = TestBed.createComponent(FactionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

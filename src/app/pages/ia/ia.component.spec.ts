import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaComponent } from './ia.component';

describe('IaComponent', () => {
  let component: IaComponent;
  let fixture: ComponentFixture<IaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IaComponent]
    });
    fixture = TestBed.createComponent(IaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

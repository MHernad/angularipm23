import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrecetaComponent } from './getreceta.component';

describe('GetrecetaComponent', () => {
  let component: GetrecetaComponent;
  let fixture: ComponentFixture<GetrecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetrecetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetrecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

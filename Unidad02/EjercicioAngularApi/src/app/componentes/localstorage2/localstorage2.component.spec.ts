import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Localstorage2Component } from './localstorage2.component';

describe('Localstorage2Component', () => {
  let component: Localstorage2Component;
  let fixture: ComponentFixture<Localstorage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Localstorage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Localstorage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

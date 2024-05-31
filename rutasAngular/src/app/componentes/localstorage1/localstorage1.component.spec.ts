import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Localstorage1Component } from './localstorage1.component';

describe('Localstorage1Component', () => {
  let component: Localstorage1Component;
  let fixture: ComponentFixture<Localstorage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Localstorage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Localstorage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

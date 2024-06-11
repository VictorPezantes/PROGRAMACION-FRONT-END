import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorage2Component } from './local-storage2.component';

describe('LocalStorage2Component', () => {
  let component: LocalStorage2Component;
  let fixture: ComponentFixture<LocalStorage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalStorage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalStorage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

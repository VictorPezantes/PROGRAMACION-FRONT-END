import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageComponent } from './local-storage1.component';

describe('LocalStorageComponent', () => {
  let component: LocalStorageComponent;
  let fixture: ComponentFixture<LocalStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalStorageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

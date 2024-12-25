import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreEditComponent } from './livre-edit.component';

describe('LivreEditComponent', () => {
  let component: LivreEditComponent;
  let fixture: ComponentFixture<LivreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

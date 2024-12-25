import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreAddComponent } from './livre-add.component';

describe('LivreAddComponent', () => {
  let component: LivreAddComponent;
  let fixture: ComponentFixture<LivreAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

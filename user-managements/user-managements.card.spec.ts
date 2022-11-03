import { ComponentFixture, TestBed } from '@angular/core/testing';

import { usermanagementscard } from './user-managements.card';

describe('usermanagementscard', () => {
  let component: usermanagementscard;
  let fixture: ComponentFixture<usermanagementscard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ usermanagementscard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(usermanagementscard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

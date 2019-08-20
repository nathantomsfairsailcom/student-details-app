// Angular
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

// Components
import { SuccessPageComponent } from './success-page.component';

const mockRouter = {
  navigate: (routes: string[]): void => {}
};

describe('SuccessPageComponent', () => {
  let fixture: ComponentFixture<SuccessPageComponent>;
  let comp: SuccessPageComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SuccessPageComponent],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    });

    fixture = TestBed.createComponent(SuccessPageComponent);
    comp = fixture.componentInstance;
    router = TestBed.get(Router);
  });

  it('should navigate back to home when a the Return button is pressed', () => {
    spyOn(router, 'navigate');
    comp.onReturn();
    expect(router.navigate).toHaveBeenCalledWith(['']);
  });
});

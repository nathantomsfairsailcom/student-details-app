// Angular
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

// RxJS
import { Observable, of } from 'rxjs';

// Components
import { FormPageComponent } from './form-page.component';

// Mocks
import { getDetailsMock } from 'src/app/mocks';

// Services
import { DetailsService } from 'src/app/services';
import { DetailsModel } from 'src/app/models';

const detailsServiceStub = {
  addDetails: (details: DetailsModel): Observable<any> => {
    return of({message: 'Success!'});
  }
};

const mockRouter = {
  navigate: (routes: string[]): void => {}
};

describe('FormPageComponent', () => {
  let fixture: ComponentFixture<FormPageComponent>;
  let comp: FormPageComponent;
  let service: DetailsService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormPageComponent],
      providers: [
        { provide: DetailsService, useValue: detailsServiceStub },
        { provide: Router, useValue: mockRouter }
      ]
    });

    fixture = TestBed.createComponent(FormPageComponent);
    comp = fixture.componentInstance;
    service = TestBed.get(DetailsService);
    router = TestBed.get(Router);
  });

  it('should call the service when asked to add a new Details record', () => {
    spyOn(service, 'addDetails').and.callThrough();
    comp.addDetails(getDetailsMock());
    expect(service.addDetails).toHaveBeenCalledWith(getDetailsMock());
  });

  it('should navigate to "/success" when a Details record has been saved', () => {
    spyOn(router, 'navigate');
    comp.addDetails(getDetailsMock());
    expect(router.navigate).toHaveBeenCalledWith(['success']);
  });
});

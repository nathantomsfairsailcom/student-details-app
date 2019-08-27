// Angular
import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

// Services
import { DetailsService } from './details-service';

// Mocks
import { getDetailsMock, getWorkLocationMock } from 'src/app/mocks';

describe('Service: DetailsService (Mocked Rest)', () => {
  let service: DetailsService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [DetailsService]
    });

    service = TestBed.get(DetailsService);
  });

  beforeEach(inject([HttpTestingController], (mockBackend: HttpTestingController) => {
    backend = mockBackend;
  }));

  it('should make a GET request and return a response when retrieving work locations', async(() => {
    const response = [getWorkLocationMock()];

    // Set up our expectation
    service.getWorkLocations().subscribe(next => {
      expect(next).toEqual(response);
    });

    // Mock the request
    backend.match({
      url: 'https://us-central1-student-details-app-sgp.cloudfunctions.net/locations',
      method: 'GET'
    })[0].flush(response);
  }));

  it('should make a POST request and return a response when saving details', async(() => {
    const response = {message: 'Successful'};

    // Set up our expectation
    service.addDetails(getDetailsMock()).subscribe(next => {
      expect(next).toEqual(response);
    });

    // Mock the request
    backend.match({
      url: 'https://us-central1-student-details-app-sgp.cloudfunctions.net/people',
      method: 'POST'
    })[0].flush(response);
  }));
});

// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';

// Models
import { DetailsModel, WorkLocationModel } from 'src/app/models';

@Injectable()
export class DetailsService {

  baseUrl = 'https://us-central1-student-details-app-sgp.cloudfunctions.net';

  constructor(private http: HttpClient) {}

  /**
   * Get the available Work Locations.
   */
  getWorkLocations(): Observable<WorkLocationModel[]> {
    return this.http.get<WorkLocationModel[]>(`${this.baseUrl}/locations`);
  }

  /**
   * Add some personal details to the database.
   */
  addDetails(details: DetailsModel): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/people`, details);
  }
}

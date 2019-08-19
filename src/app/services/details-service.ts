// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';

// Models
import { DetailsModel } from 'src/app/models';

@Injectable()
export class DetailsService {

  baseUrl = 'https://us-central1-student-details-app-sgp.cloudfunctions.net';

  constructor(private http: HttpClient) {}

  /**
   * Add some student details to the database.
   */
  addDetails(details: DetailsModel): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save`, details);
  }
}

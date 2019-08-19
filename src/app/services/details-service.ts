// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DetailsService {

  constructor(private http: HttpClient) {}

  /**
   * Add some student details to the database.
   */
  addDetails(details: any): Observable<any> {
    return this.http.post<any>('https://us-central1-student-details-app-sgp.cloudfunctions.net/save', details);
  }
}

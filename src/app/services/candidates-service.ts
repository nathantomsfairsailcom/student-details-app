// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';

// Models
import { CandidatesModel } from 'src/app/models';

@Injectable()
export class CandidatesService {
  baseUrl = 'https://us-central1-student-details-app-sgp.cloudfunctions.net';

  constructor(private http: HttpClient) {}

  /**
   * Get the candidates.
   */
  getCandidates(): Observable<CandidatesModel> {
    return this.http.get<CandidatesModel>(`${this.baseUrl}/candidates`);
  }
}

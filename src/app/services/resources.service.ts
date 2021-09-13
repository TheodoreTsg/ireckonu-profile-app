import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Profile } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private resources = new ReplaySubject<Profile[]>(1);
  resources$: Observable<Profile[]> = this.resources.asObservable();

  initialize(): void {
    this.getResources().subscribe(
      resources => this.resources.next(resources)
    );
  }

  private getResources(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(
      environment.serverURL + environment.authURL + environment.api.resources
    )
      .pipe(
        tap(),
        catchError( reason => {
          return throwError(reason);
        })
      );
  }
}

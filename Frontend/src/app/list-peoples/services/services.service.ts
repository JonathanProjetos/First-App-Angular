import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  private readonly API = 'http://localhost:3001/peoples';

  constructor(
    private httpClient: HttpClient,
  ) { }

  findAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.API);
  }

  createPeople(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.API, person)
  }

  deletePeople(id: number): Observable<Person> {
    return this.httpClient.delete<Person>(`${this.API}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from 'src/models/course';

const BASE_URL = 'http://localhost:9000/api';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  getCourses(): Observable<Course> {
    return this.httpClient.get<Course>(BASE_URL + '/courses');
  }
}

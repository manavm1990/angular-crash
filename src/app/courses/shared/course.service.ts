import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Course from 'src/models/course';
import CoursesPayload from 'src/models/coursesPayload';

const BASE_URL = 'http://localhost:9000/api';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  getCourses(): Observable<CoursesPayload> {
    return this.httpClient.get<CoursesPayload>(BASE_URL + '/courses');
  }
}

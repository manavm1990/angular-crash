import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Course from 'src/models/course';
import CoursesPayload from 'src/models/coursesPayload';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  initCourses(): Observable<CoursesPayload> {
    return this.httpClient.get<CoursesPayload>('/api/courses');
  }
}

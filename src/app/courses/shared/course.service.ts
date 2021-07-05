import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Course from 'src/models/course';
import CoursesPayload from 'src/models/coursesPayload';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  getCourse(id: number): Observable<Course> {
    const params = new HttpParams().set('id', id.toString());
    return this.httpClient.get<Course>('/api/courses/', { params });
  }

  initCourses(): Observable<CoursesPayload> {
    return this.httpClient.get<CoursesPayload>('/api/courses');
  }

  updateCourse(course: Course): Observable<Course> {
    return this.httpClient.put<Course>('/api/courses/' + course.id, course);
  }
}

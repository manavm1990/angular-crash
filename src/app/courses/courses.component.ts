import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseService } from 'src/app/courses/shared/course.service';
import Course from 'src/models/course';
import CoursesPayload from 'src/models/coursesPayload';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses$!: Observable<CoursesPayload>;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses$ = this.courseService.initCourses();
  }

  selectCourse(course: Course): void {
    console.log(course);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.courses$ = this.courseService.initCourses();
  }

  select(course: Course): void {
    this.router.navigate(['/courses/', course.id]);
  }

  update(course: Course): void {
    this.courseService
      .updateCourse(course)

      // ⚠️ MUST SUBSCRIBE TO TRIGGER UPDATE!
      .subscribe();
  }
}

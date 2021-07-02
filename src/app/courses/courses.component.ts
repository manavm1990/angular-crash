import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/courses/shared/course.service';
import Course from 'src/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(({ payload }) => {
      this.courses = payload;
    });
  }

  selectCourse(course: Course): void {
    console.log(course);
  }
}

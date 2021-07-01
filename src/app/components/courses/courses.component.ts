import { Component, OnInit } from '@angular/core';
import { COURSES } from 'src/db';
import { Course } from 'src/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit() {
    this.courses = COURSES;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Output() selectedACourse: EventEmitter<Course> = new EventEmitter<Course>();
  @Input() course!: Course;
  @Input() courseNumber!: number;
  @Input() isFirst: boolean = false;

  onClick(): void {
    this.selectedACourse.emit(this.course);
  }
}

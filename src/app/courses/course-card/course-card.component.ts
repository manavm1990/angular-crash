import { Component, EventEmitter, Input, Output } from '@angular/core';
import Course from 'src/models/course';

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
  @Input() isLast: boolean = false;
  @Input() isOdd: boolean = false;
  @Input() isEven: boolean = false;

  onSelectClick(): void {
    this.selectedACourse.emit(this.course);
  }
}

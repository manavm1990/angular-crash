import { Component, EventEmitter, Input, Output } from '@angular/core';
import Course from 'src/models/course';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Output() changedACourse: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() selectedACourse: EventEmitter<Course> = new EventEmitter<Course>();
  @Input() course!: Course;
  @Input() courseNumber!: number;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;
  @Input() isOdd: boolean = false;
  @Input() isEven: boolean = false;

  onDescChange(descVal: string): void {
    this.course.description = descVal;
  }

  onSelectClick(): void {
    this.selectedACourse.emit(this.course);
  }

  onUpdateClick(): void {
    this.changedACourse.emit(this.course);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: 'courses/:id', component: CourseCardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

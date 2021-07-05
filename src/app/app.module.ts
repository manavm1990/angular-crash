import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [AppComponent, CourseCardComponent, CoursesComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

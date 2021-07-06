import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CoursesComponent } from './courses/courses.component';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';

@NgModule({
  declarations: [AppComponent, CourseCardComponent, CoursesComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { CircleProgressOptions, NgCircleProgressModule } from 'ng-circle-progress';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleProgressComponent,
    CourseComponent
    
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule,
  ],
  providers: [
    CircleProgressOptions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

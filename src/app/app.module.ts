import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SlickModule } from 'ngx-slick';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CourseService } from './services/course.service';
import { FormsModule } from '@angular/forms';
import { CoursePipe } from './components/courses/course.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CoursesComponent,
    CoursePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

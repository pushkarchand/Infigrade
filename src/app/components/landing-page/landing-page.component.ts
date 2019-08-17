import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  listOfCourses: Course[];
  listOfClients: Client[];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.enumerateCourses();
    this.enumerateClients();
  }


  private enumerateCourses(): void {
    this.courseService.enumerateCourses()
      .subscribe(couseResponse => {
        this.listOfCourses = couseResponse.courses;
        console.log(this.listOfCourses);
      });
  }// private enumerateCourses(): void

  public enumerateClients(): void {
    this.courseService.enumerateClients()
      .subscribe(clientsResponse => {
        this.listOfClients = clientsResponse.clients;
        console.log(this.listOfClients);
      });
  }

}

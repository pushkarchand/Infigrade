import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';
import { Client } from 'src/app/models/client';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('reviews', { read: DragScrollComponent }) reviewDragScroll: DragScrollComponent;
  listOfCourses: Course[];
  listOfClients: Client[];
  dragscroll = false;
  listOfUserReviews = [{
    'review': `one of the best platform to learn the basic fundamentals & advanced subjects with  experinced trainer's`,
    'username': 'Nittin'
  },
  {
    'review': `Great tariner who give individual attention to minor deatils of the course`,
    'username': 'Vivek Sinha'
  },
  {
    'review': `Great starting point for both fresher's as well as experienced`,
    'username': 'Ranjith'
  }
  ];
  constructor(private courseService: CourseService, private router: Router) { }

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

  public navigatetoGivenRoute(argPath: string): void {
    this.router.navigate([`/${argPath}`]);
  }

  public previousReview() {
    this.reviewDragScroll.moveLeft();
  }

  public nextReview() {
    this.reviewDragScroll.moveRight();
  }

}

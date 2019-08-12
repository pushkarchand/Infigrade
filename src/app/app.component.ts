import { Component, OnInit } from '@angular/core';
import { CourseService } from './services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Infigradefrontend';


  constructor(private router: Router) { }
  ngOnInit(): void {

  }



  public navigatetoGivenRoute(argroute: string): void {
    this.router.navigate([`/${argroute}`]);
  }// public navigatetoCourses(): void

}


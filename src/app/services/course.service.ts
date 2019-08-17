import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
@Injectable()
export class CourseService {

  constructor(public httpClient: HttpClient) { }

  /**
   * Enumerate the list of Courses
   */
  public enumerateCourses(): Observable<any> {
    return this.httpClient.get('./assets/configs/courses.json');
  }// public  enumerateCourses(): Observable<any>

  public enumerateClients(): Observable<any> {
    return this.httpClient.get('./assets/configs/clients.json');
  }
}

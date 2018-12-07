import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackendServiceProvider {

  private readonly posts: string = 'posts';

  constructor(@Inject('baseUrl') private baseUrl: string, public http: HttpClient) {
  }

  getPosts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${this.posts}`);
  }

}

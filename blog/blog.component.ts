import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/of';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  ngOnInit(): void {
  }

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/';

  posts : Observable<any> | undefined;
  newPost : Observable<any> | undefined;

  constructor(private http: HttpClient) {}

  getPosts() {
    let params = new HttpParams().set('userId','1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.posts = this.http.get(this.ROOT_URL + '/posts', {params, headers})
  }

  createPost() {
    const data: Post = {
      id : 0 ,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World!'
    }

    this.newPost = this.http.post<Post>(this.ROOT_URL + '/posts', data)
    

  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: any = [];

  constructor() { }

  getPosts() {
    return this.posts;
  }
}

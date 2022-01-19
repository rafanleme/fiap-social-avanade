import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../services/post.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {

  posts: any;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  saveComment() {
    alert("Comentário está sendo salvo!");
  }
}

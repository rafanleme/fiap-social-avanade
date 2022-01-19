import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: any = [
    {
      id: 40,
      title: 'Testee',
      description: 'teste, teste',
      image: "https://media.bitdegree.org/storage/media/images/2018/12/node-js-interview-questions-logo-2-266x300.png",
      gist: null,
      created_at: '2021-11-10T18:04:09.000Z',
      StudentId: 1,
      Student: {
        id: 1,
        name: 'Rafael',
        image: 'http://fiap-social-api.herokuapp.com/uploads/1636312523776.jpg',
      },
      Categories: [
        {
          id: 5,
          description: 'Mobile Backend',
        },
        {
          id: 6,
          description: 'Kotlin',
        },
        {
          id: 7,
          description: 'Kotlin',
        },
      ],
      Answers: [
        {
          id: 255,
          description: 'testeee quantidade de caracteres',
          created_at: '2021-11-10T18:13:15.000Z',
          Student: {
            id: 1,
            name: 'Rafael',
            image:
              'http://fiap-social-api.herokuapp.com/uploads/1636312523776.jpg',
          },
        },
        {
          id: 256,
          description: 'testando o comentário',
          created_at: '2021-11-10T19:50:59.000Z',
          Student: {
            id: 1,
            name: 'Paula',
            image:
              'http://fiap-social-api.herokuapp.com/uploads/1636312523776.jpg',
          },
        },
      ],
    },
  ];

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts() {
    return this.httpClient.get("https://fiap-social-api.herokuapp.com/feed", {
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiUmFmYWVsIiwiaWF0IjoxNjQyNTI5ODA0LCJleHAiOjE2NDI1MzM0MDR9.esASYDGdKzv3ATD1DCgN0oqGU4GI78oXqlz_aWkUU8o'
      }
    });
  }

  getPostById(postId: number) {
    return this.posts.find((post: any) => post.id === postId);
  }
}

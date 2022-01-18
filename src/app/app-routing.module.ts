import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './views/pages/feed/feed.component';
import { LoginComponent } from './views/pages/login/login.component';
import { PostDetailComponent } from './views/pages/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: "post-detail",
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { PostComponent } from "./post/post.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routing = [MainComponent, PostComponent]

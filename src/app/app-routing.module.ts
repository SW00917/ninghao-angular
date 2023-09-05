import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { PostComponent } from './modules/post/post.component';
// import { PostDetailsComponent } from './modules/post/components/post-details/post-details.component';
// import { RegisterComponent } from './modules/user/components/register/register.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MessageBoxComponent } from './core/components/message-box/message-box.component';

const routes: Routes = [
  // { path: 'posts', component: PostComponent },
  // { path: 'posts/:id', component: PostDetailsComponent },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./modules/demo/demo.module').then((module) => module.DemoModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
  {
    path: 'message',
    component: MessageBoxComponent,
    outlet: 'popup',
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

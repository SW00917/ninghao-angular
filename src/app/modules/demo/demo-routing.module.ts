import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
// import { AdminComponent } from './admin/admin.component';
// import { AuthGuard } from './auth/auth.guard';
// import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
// import { PostComponent } from '../post/post.component';
// import { CanDeactivateGuard } from './admin/can-deactivate.guard';

const routes: Routes = [
  {
    // path: 'demo',
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'child-routes',
        component: ChildRoutesComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      // {
      //   path: 'admin',
      //   component: AdminComponent,
      //   canActivate: [AuthGuard],
      //   canActivateChild: [AuthGuard],
      //   canDeactivate: [CanDeactivateGuard],
      //   children: [
      //     {
      //       path: 'dashboard',
      //       component: AdminDashboardComponent,
      //     },
      //     {
      //       path: 'posts',
      //       component: PostComponent,
      //     },
      //   ],
      // },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((module) => module.AdminModule),
        canLoad: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}

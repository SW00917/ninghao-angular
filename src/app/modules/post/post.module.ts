import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostItemComponent } from './component/post-item/post-item.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [PostComponent, PostItemComponent, PostDetailsComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [PostComponent],
})
export class PostModule {}

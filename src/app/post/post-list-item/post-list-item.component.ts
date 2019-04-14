import { Component, OnInit, Input} from '@angular/core';
import { Post } from '../../model/post.model';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

    constructor(private posteService: PostService) {}

   @Input() monPost: Post;
   @Input() index: number;

  ngOnInit() {
  }

  loveIt(post: Post) {
     this.posteService.loveIt(post);
  }

  dontLoveIt(post: Post) {
       this.posteService.dontLoveIt(post);
  }

  deletePost(post: Post) {
    this.posteService.deletePost(post);
  }
}


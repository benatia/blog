import { Component, OnInit, Input} from '@angular/core';
import { Post } from '../../model/Post.model';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

   @Input() monPost: Post;



  constructor() { }

  ngOnInit() {
  }

  loveIt() {
      this.monPost.loveIts += 1;
  }
  dontLoveIt() {
      this.monPost.loveIts -= 1;
  }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../model/Post.model';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router
                ) { }

  ngOnInit() {
      this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: 0,
      created_at: ''
    });
}
 onSubmitForm() {
    const formValue = this.postForm.value;
    const post = new Post(
      formValue.title,
      formValue.content,
      formValue.loveIts ,
      new Date().toString()
    );
    console.log(post.created_at)
    this.postService.addPost(post);
    this.postService.refreshList();
    this.router.navigate(['posts']);
  }
}


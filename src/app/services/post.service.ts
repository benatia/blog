import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PostService {

     postsSubject = new Subject<any[]>();

     private posts: Post[] = [];

constructor() {
   }

 addPost(post: Post) {
            this.posts.push(post);
            this.savePost();
            this.emitpostSubject();
  }

savePost() {
      firebase.database().ref('/posts').set(this.posts);
    }

getSinglePost(id: number) {
       return new Promise(
         // tslint:disable-next-line:no-shadowed-variable
         (resolve , reject) => {
            firebase.database().ref('/posts/' + id).once('value').then(
                (data) => {
                    resolve(data.val());
                }, (error) => {
                    reject(error);
                }
            );
         }
       );
    }

emitpostSubject() {
            this.postsSubject.next(this.posts);
  }

deletePost(post: Post) {
     const postIndextoremove = this.posts.findIndex(
         (postRE) => {
             if (postRE === post) {
                return true;
             }
         }
     );
     this.posts.splice(postIndextoremove, 1);
     this.savePost();
     this.emitpostSubject();
 }

loveIt(post: Post) {
     const postIndexUpdate = this.posts.findIndex(
         (postRE) => {
             if (postRE === post) {
                return true;

             }
         }
     );
     this.posts[postIndexUpdate].loveIts += 1;
     this.savePost();
     this.emitpostSubject();
  }

dontLoveIt(post: Post) {
    const postIndexUpdate = this.posts.findIndex(
         (postRE) => {
             if (postRE === post) {
                return true;
             }
         }
     );
    this.posts[postIndexUpdate].loveIts -= 1 ;
    this.savePost();
    this.emitpostSubject();
  }

refreshList() {
      firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.posts.sort((a, b) => (a.created_at > b.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0));
          this.emitpostSubject();
        }
      );
    }
} 
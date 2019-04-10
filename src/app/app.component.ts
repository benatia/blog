import { Component } from '@angular/core';
import { Post } from './model/Post.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
   posts = [
      new Post('Mon premier post',
               'Welcome to Angular! Angular helps you build modern applications for the web, mobile, or desktop',
               0 , new Date()),
      new Post('Mon deuxieme post',
               'Before you begin, make sure your development environment includes Node.js and an npm package manager'
               , 0 , new Date()),
      new Post('Encore post',
                'You use the Angular CLI to create projects, generate application and library code',
                 0 , new Date())
  ];

}

import { Component  } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor() {
const config = {
        apiKey: 'AIzaSyBuzJWUZqw0DmiUIx3kOs7qJ-yrFoB6cBo',
        authDomain: 'post-3a637.firebaseapp.com',
        databaseURL: 'https://post-3a637.firebaseio.com',
        projectId: 'post-3a637',
        storageBucket: 'post-3a637.appspot.com',
        messagingSenderId: '1033998808752'
     };
firebase.initializeApp(config);
    }

}

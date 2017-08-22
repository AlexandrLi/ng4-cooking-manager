import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyC9Uh3ANPE9DR80y19RsbJaebeGdzWImAo',
      authDomain: 'cooking-manager.firebaseapp.com',
    };
    firebase.initializeApp(config);
  }
}

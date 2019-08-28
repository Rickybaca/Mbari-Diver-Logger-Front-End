import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { AlertService } from '../alert.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private titleService: TitleService, private data: DataService) { }

  ngOnInit() {
    // Set the title of the page in the browser
    this.titleService.setTitle("Home");
  }

  public exampleError(){
    AlertService.newMessage('Hi! This is an example of a brief error message.', true);
  }

  public exampleSuccess(){
    AlertService.newMessage('Hello! This is an example of a "success" message. It may wrap because it is intentionally a bit long.', false);
  }
  public authenticate(){
    this.data.authenticateUser(this.username, this.password).subscribe(
        data => {
          if(data === "true"){
            this.router.navigateByUrl("/dashboard");
          }
          else{
            alert('Incorrect username or password');
          }
        }
    )
  }

}

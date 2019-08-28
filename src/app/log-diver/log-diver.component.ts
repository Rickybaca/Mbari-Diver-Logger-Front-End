import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-diver',
  templateUrl: './log-diver.component.html',
  styleUrls: ['./log-diver.component.scss']
})
export class LogDiverComponent implements OnInit {

  log$: object;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getAllLogs().subscribe(
      data => {
      this.log$ = data;
      }
    );
  }

  onSubmit(form: any): void{

    this.data.addLog(form).subscribe(
      data => {
        this.router.navigate(['/dashboard'])
      },
      failure => {}
    )
    //console.log('you submitted value:', form);

  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-diver',
  templateUrl: './add-diver.component.html',
  styleUrls: ['./add-diver.component.scss']
})
export class AddDiverComponent implements OnInit {

  divers$: object;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getAllDivers().subscribe(
      data => {
        this.divers$ = data;
      }
    );
  }



  onSubmit(form: any): void{

    this.data.addDiver(form).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['dashboard']);

      },
      failure => {
        console.log(failure);
        console.log("failure");
      }
    )
    //console.log('you submitted value:', form);

  }

}

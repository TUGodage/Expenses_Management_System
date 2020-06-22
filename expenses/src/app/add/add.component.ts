import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddService } from './add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  body = {
    title: '',
    amount: 0,
    date: '',
    type: '',
  };

  isUpdate = false;
  error = "";
  constructor(private route: ActivatedRoute, private service: AddService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((val) => {
      this.body.type = val.type;

      if(val.item){
        this.body = JSON.parse(val.item);
        this.isUpdate = true;
      }
    });
  }

  add() {
    if (this.body.title === '' || this.body.amount === 0 || this.body.date === '' || this.body.type === '') {
      this.error = 'All fields are required!';
    } else {
      if(this.isUpdate){
        this.service.update(this.body).subscribe((val:any) => {
          console.log(val);
          if(val.status === 'success'){
            alert("Added");
          }else{
            this.error = val.message;
          }
        });
      }else{
        this.service.add(this.body).subscribe((val:any) => {
          console.log(val);
          if(val.status === 'success'){
            alert("Added");
          }else{
            this.error = val.message;
          }
        });
      }

    }
  }
}

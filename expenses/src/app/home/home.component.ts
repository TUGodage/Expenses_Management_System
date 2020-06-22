import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  body = {
    email: '',
    password: '',
  };

  error = '';

  constructor(private service: HomeService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (this.body.email === '' || this.body.password === '') {
      this.error = 'All fields are required!';
    } else {
      this.service.login(this.body).subscribe((val:any) => {
        console.log(val);
        if(val.status === 'success'){
          localStorage.setItem('access_token',val.payload.access_token)
          this.router.navigate(['/login']);
        }else{
          this.error = val.message;
        }
      });
    }
  }
}

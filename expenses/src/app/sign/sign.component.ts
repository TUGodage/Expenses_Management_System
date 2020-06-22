import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent implements OnInit {
  body = {
    email: '',
    password: '',
    confPass: '',
  };

  error = '';

  constructor(private service: SigninService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (
      this.body.email === '' ||
      this.body.password === '' ||
      this.body.confPass === ''
    ) {
      this.error = 'All fields are required!';
    } else if (this.body.password !== this.body.confPass) {
      this.error = 'Password mismatch';
    } else {
      this.service.signup(this.body).subscribe((val: any) => {
        console.log(val);
        if (val.status === 'success') {
          this.router.navigate(['/']);
        } else {
          this.error = val.message;
        }
      });
    }
  }
}

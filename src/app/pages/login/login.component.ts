import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-welcome, nz-demo-form-normal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private route:ActivatedRoute, private router:Router) {}
  
  ngOnInit(): void{
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    }); 
  }
  login(event:any){
    if(this.validateForm.value.userName == 'admin' && this.validateForm.value.password == 'admin'){
      alert("Success!");
      this.router.navigate(['/caculator'], {relativeTo: this.route});
    }
    else{
      alert("Fail!");
    }
  }
  // register(){
  //   alert("success!");
  // }

}

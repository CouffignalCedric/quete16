import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from './password.validator';
import { emailValidator } from './email-validator';
;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: any

  userForm = this.fb.group({
    username: ['',[Validators.required,Validators.minLength(4)]],
    
    credentials: this.fb.group({
      email: ['',Validators.required,emailValidator,Validators.minLength(5),Validators.maxLength(50)],
      password: ['',[Validators.required,passwordValidator]]
    }),

    address: this.fb.group({
      street: [''],
      postalCode: [''],
      city: ['']
    })

  });

  // username = new FormControl('');
  // email = new FormControl('');
  // password  = new FormControl('');
  // street = new FormControl('');
  // postalCode = new FormControl('');
  // city = new FormControl('');
  // submit: boolean= false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  // changeusername(){
  //   this.username.setValue('kitten69');
  // }
  onSubmit() {
    this.user = this.userForm.value
   console.log(this.userForm.value);
 

  }
}


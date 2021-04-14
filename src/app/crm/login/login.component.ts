import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  username: string;
  password: string;
  
  
  
  constructor( private rout:Router,
    private formbuilder: FormBuilder
    ) 
  { 
    this.createForm();
  }

  gotoblog(){
    this.rout.navigate(['/index'])
  }

createForm(){
  this.form = this.formbuilder.group({
    username:['', Validators.required],
    password:['',Validators.required]
    
   
  });
}

gotohome(){
  this.rout.navigate(['/index'])
}

logInUser(){
  if(this.username == "reyaj123" && this.password == "reyaj123"){
   
    this.gotoblog()
    
  }else{  
    alert('Invalid username or password')
    this.form.reset({})
  }
}

  ngOnInit(): void {
  } 
 }

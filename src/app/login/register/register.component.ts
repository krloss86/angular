import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
   }

   createForm(): FormGroup {
     return this.registerForm = this.formBuilder.group({
       firstName: [Validators.required]
     });
   }

  ngOnInit() {
    this.registerForm.setValue(
      {
        firstName: ''
      }
    );
  }

  onSubmit() {
    console.log(this.registerForm.controls);
  }
}

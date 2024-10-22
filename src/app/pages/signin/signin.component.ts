import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: this.fb.control(''),
      cognome: this.fb.control(''),
      // email pass
      data: this.fb.group({
        email: this.fb.control(''),
        password: this.fb.control('', [Validators.required]),
        confermaPassword: this.fb.control(''),
      }),
      genere: this.fb.control(''),
      avatar: this.fb.control(''),
      bio: this.fb.control(''),
      userName: this.fb.control(''),
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    } else {
      console.log('Form is invalid');
    }
    console.log(this.form);
    console.log(this.form.controls);
  }

  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid;
  }

  isTouched(fieldName: string) {
    return this.form.get(fieldName)?.touched;
  }

  isInvalidTouched(fieldName: string) {
    return !this.isValid(fieldName) && this.isTouched(fieldName);
  }
}

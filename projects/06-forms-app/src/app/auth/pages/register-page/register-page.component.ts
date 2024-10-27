import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {
//   cantBeStrider,
//   emailPattern,
//   firstNameAndLastnamePattern,
// } from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.firstNameAndLastnamePattern),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.emailPattern),
      ],
      // [new EmailValidator()],
      [this.emailValidator],
    ],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
  ) {}

  onSubmit(): void {
    if (!this.validatorsService.isValidForm(this.myForm)) return;

    console.log(this.myForm.value);
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }
}

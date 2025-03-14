import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

const WORD = 'strider';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBeStrider = (
    control: FormControl<string>
  ): ValidationErrors | null => {
    const value: string = control.value.trim().toLocaleLowerCase();

    if (value === WORD) {
      return {
        noStrider: true,
      };
    }

    return null;
  };

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  public isValidForm(form: FormGroup): boolean {
    form.markAllAsTouched();

    return form.valid;
  }

  public isFieldOneEqualFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEqual: true });

        return { notEqual: true };
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    };
  }
}

import { FormControl, ValidationErrors } from '@angular/forms';

const WORD = 'strider';

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const cantBeStrider = (
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

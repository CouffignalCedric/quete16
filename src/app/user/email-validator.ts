import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const emailRegex = RegExp('/^.+@.+\.(fr)$/i');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'doit contenit au moins un @ etse termine par .fr'
        }
    };

    return !valid ? null:{invalidEmail:true};
}
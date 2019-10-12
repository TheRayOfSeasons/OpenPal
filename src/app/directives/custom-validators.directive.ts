import { Validators, FormControl } from '@angular/forms';

function ValidateEmail(c: FormControl) {
    let EMAIL_REGEX = new RegExp(`/^(([^<>()` + `\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`);

    return EMAIL_REGEX.test(c.value) ? {
        validateEmail: {
            invalid: true,
        }
    }: null;
}

export default ValidateEmail;
import {AbstractControl} from '@angular/forms'
export function PasswordValidator(control:AbstractControl):{  [key:string]: boolean}|null {
    const new_password=control.get('new_password');
    const confirm_password=control.get('confirm_password');

    if(new_password.pristine|| confirm_password.pristine){
        return null;
    }

    return new_password && confirm_password && new_password.value != confirm_password.value ?
    {'missMatch':true} :
    null;
}


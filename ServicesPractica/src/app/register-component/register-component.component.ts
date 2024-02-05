import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {
  RegisterForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
    repetirpassword: new FormControl(''),
  });
}

  /*GuardarRegistro() {
    if (this.RegisterForm.valid) {
      console.log(this.tarjetaForm.value);
      this.nuevaTarjetaEvent.emit(this.tarjetaForm.value);
      this.tarjetaForm.reset(); 
    }
} */

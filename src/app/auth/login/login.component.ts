// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [
//     ReactiveFormsModule,
//     RouterModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'] // Debe ser `styleUrls` en plural
// })

// export class LoginComponent implements OnInit {
  
//   loginForm: FormGroup;
// // 1. Colocar deba de export class LoginComponent implements OnInit { loginForm:FormGroup;
// // 2. Luego colocar el objeto que de los datos que se necesitan dentro del constructor

// // Constructor que inyecta FormBuilder
//   constructor(private formBuilder: FormBuilder) {
// // Definir el objeto loginForm dentro de la clase
//   this.loginForm = this.formBuilder.group({
//   email: ['iva@gmail.com', Validators.email, Validators.required],
//   password: ['', Validators.required] // Añadir un valor por defecto vacío para password
// });
//   }
//   // Implementación de ngOnInit
//   ngOnInit(): void {
//   }

//   login(){
//         if(this.loginForm.valid){
//           console.log("Llamar al servicio de login");
//         } else{
//           alert("Error al ingresar los datos");
//         }
//     }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Debe ser `styleUrls` en plural
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // Constructor que inyecta FormBuilder y Router
  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Definir el objeto loginForm dentro de la clase con los validadores correctamente definidos
    this.loginForm = this.formBuilder.group({
      email: ['alexa@gmail.com', [Validators.required, Validators.email]], // Corregir la lista de validadores
      password: ['', Validators.required] // Añadir un valor por defecto vacío para password
    });
  }

  // Implementación de ngOnInit
  ngOnInit(): void {}

  // Método login para manejar el envío del formulario
  login() {
    if (this.loginForm.valid) {
      console.log("Llamar al servicio de login");
      this.router.navigateByUrl("inicio")
      this.loginForm.reset(); 
      } else {
      alert("Error al ingresar los datos");
    }
  }
}


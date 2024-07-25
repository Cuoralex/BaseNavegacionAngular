import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

// 1. Se agrega 
// export class NavbarComponent implements OnInit {
//      UserLoginOn:bolean=false;
// constructor(){}
//} 

//2. Se debe hacer la importancion de OnInit en @angular/core

// Sale un error ne NavbarComponent y debe hacerse la implementación de 
// ngOnInit(): void {
//  throw new Error('Method not implemented.');
//}

export class NavbarComponent implements OnInit {
  userLoginOn:boolean=false;
  constructor(){}
  ngOnInit(): void {}

}

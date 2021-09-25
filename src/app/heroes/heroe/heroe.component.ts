import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  nombre: string = 'Ironman';
  edad: number = 28;


  get nombreMayuscula(){
    return this.nombre.toUpperCase();
  }
//alt + 96
  getNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  updateNombre(): void{
     this.nombre = 'Spiderman'
  }

  updateEdad(): void{
    this.edad = 25
 }



  constructor() { }

  ngOnInit(): void {
  }

}

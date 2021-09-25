import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  //arreglo
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan América'];
  heroeBorrado: string = '';
  borrado:boolean = false;

  deleteHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';//borra el primero
    this.borrado = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        //todo lo que es visible hacia afuera, publicamente
        ListadoComponent
    ],
    imports:[
        CommonModule,
        BrowserModule
    ]
})

export class HeroesModule{}
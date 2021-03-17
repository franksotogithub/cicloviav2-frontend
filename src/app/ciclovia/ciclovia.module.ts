import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { CicloviaPageRoutingModule } from './ciclovia-routing.module';

import { CicloviaPage } from './ciclovia.page';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; // <-- #2 import module
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    IonicModule,
    CicloviaPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [CicloviaPage]
})
export class CicloviaPageModule {}

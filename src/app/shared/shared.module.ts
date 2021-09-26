import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalActivityComponent } from './components/modal-activity/modal-activity.component';



@NgModule({
  declarations: [ModalActivityComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }

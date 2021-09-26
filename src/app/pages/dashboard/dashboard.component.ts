import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalActivityComponent } from '../../shared/components/modal-activity/modal-activity.component';
import { ModalContactFormComponent } from '../../shared/components/modal-contact-form/modal-contact-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async presentModalActivity() {
    const modal = await this.modalController.create({
      component: ModalActivityComponent ,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentModalContact() {
    const modal = await this.modalController.create({
      component: ModalContactFormComponent ,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}

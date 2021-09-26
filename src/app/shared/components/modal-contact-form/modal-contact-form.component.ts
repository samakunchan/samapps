import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-contact-form',
  templateUrl: './modal-contact-form.component.html',
  styleUrls: ['./modal-contact-form.component.scss'],
})
export class ModalContactFormComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onClose() {
    this.modalController.dismiss();
  }
}

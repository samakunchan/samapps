import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-activity',
  templateUrl: './modal-activity.component.html',
  styleUrls: ['./modal-activity.component.scss'],
})
export class ModalActivityComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onClose() {
     this.modalController.dismiss();
  }
}

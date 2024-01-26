import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PaymentPage } from '../payment/payment.page';  

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
payment(){
    this.modalController.create({component:PaymentPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }
}

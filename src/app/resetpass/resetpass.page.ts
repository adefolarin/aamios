import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {

  email: string = "";
  code: string = "";
  pass: string = "";

  disabledButton;

  constructor(private router: Router, 
    private navCtrl: NavController,
  	private accessserv: ServiceService,
  	private storage: Storage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.email = this.activatedroute.snapshot.paramMap.get('id');
  }

  ionViewDidEnter() {
    this.disabledButton = false;
  }


  async resetpass() {
    if(this.email == "") {
      this.presentToast("Email is required","danger");
    } else if(this.code == "") {
      this.presentToast("Enter the code sent to your mail","danger");
    } else if(this.pass == "") {
      this.presentToast("Enter your new password","danger");
    } else {

      
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: "Please wait......",
      });
      loader.present();
      

       return new Promise(resolve => {
          let body = {
            resetpassword: 'process_resetpassword',
            email: this.email,
            pass: this.pass,
            code: this.code
          }
          
          this.accessserv.postData(body, 'resetpassword-api.php').subscribe((res:any) =>{
             if(res.success == true) {
               loader.dismiss();
               this.disabledButton = false;
               this.presentToast(res.msg,"success");
               this.router.navigate(['/sign-in']);
             } else {
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast(res.msg,"danger");
             }
          },(err)=>{
              loader.dismiss();
              this.disabledButton = false;
              this.presentAlert('Timeout');
              console.log(err);
          });

       });

    }
  }



  async presentToast(a,color) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'middle',
      color:color,
    });
    toast.present();
  }


  async presentAlert(a) {
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Close',
          handler: (blah) => {
            console.log('Confirm Cancel: Cancelled');
          }
        }, {
          text: 'Try Again',
          handler: () => {
            this.resetpass();
          }
        }
      ]
    });
    await alert.present();
  }

}

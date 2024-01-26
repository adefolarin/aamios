import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  email: string = "";
  pass: string = "";

  disabledButton;

  constructor(private router: Router, 
    private navCtrl: NavController,
    private accessserv: ServiceService,
    private storage: Storage,
    private storage2: Storage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.disabledButton = false;
  }

  password() {
    this.router.navigate(['./forgot-password']);
  } 

  signup() {
    this.router.navigate(['./sign-up']);
  } 

  
  async signin() {
    if(this.email == "") {
      this.presentToast("Email is required","danger");
    } else if(this.pass == "") {
      this.presentToast("Password is required","danger");
    }  else {

       this.disabledButton = true;

       const loader = await this.loadingCtrl.create({
        message: "Please wait......",
      });

       loader.present()
      
       return new Promise(resolve => {
          let body = {
            login: "process_login",
            email: this.email,
            pass: this.pass
          }
          
          this.accessserv.postData(body, 'login-api.php').subscribe((res:any) =>{
             if(res.success == true) {
               loader.dismiss();
               this.disabledButton = false;
               this.presentToast("Login Successful","success"); 
                this.storage.set("session_1", res.result); // Create Storage Session
                this.router.navigate(['/home']);
     
               
             } else {
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast(res.msg,"danger");
             }
          },(err)=>{
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast('Timeout',"danger");
              //console.log(err);
          });

       });

    }
  }

  async signinGuest() {
    await this.storage.set("session_1", {name:"guest"}); // Create Storage Session
    this.router.navigate(['/home']);
 
  }



  async presentToast(a,color) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      color:color,
      position:'middle'
    });
    toast.present();
  }
}

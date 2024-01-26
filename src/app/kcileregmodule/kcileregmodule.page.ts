import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-kcileregmodule',
  templateUrl: './kcileregmodule.page.html',
  styleUrls: ['./kcileregmodule.page.scss'],
})
export class KcileregmodulePage implements OnInit {


  name: string = "";
  pnum: string = "";
  email: string = "";
  address: string = "";
  country: string = "";
  state: string = "";
  city: string = "";
  zipcode: string = "";
  gender: string = "";
  modules: any;
  moduletype: any;
  mymodules: any;

  val: string = "";

  checkedItems = [];


  disabledButton: any;

  constructor(
  	private accessserv: ServiceService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.modules = [
      {name:'Now that you are a Christian',checked:'false'},
      {name:'How to study the Bible',checked:'false'},
      {name:'Prayer - How to finish the bible',checked:'false'},
      {name:'Leadership & Fellower-ship',checked:'false'},
      {name:'Evangelism',checked:'false'},
      {name:'Giving',checked:'false'},
      {name:'Baptism',checked:'false'},
    ];
    

    this.modules.checked = 'true';
  }

  ionViewDidEnter() {
    this.disabledButton = false;
  }


  isChecked(item,event) {
    if(event.currentTarget.checked == true) {
      this.checkedItems.push(item);
      if(this.checkedItems.length > 0) {
        this.val = "Checked";
      }    
    } else if(event.currentTarget.checked  == false) {
       this.checkedItems.pop();
       if(this.checkedItems.length == 0) {
        this.val = "";
      };
    }
  }

  async kcileregmodule() {

    if(this.name == "") {
      this.presentToast("Name is required","danger");
    } else if(this.email == "") {
      this.presentToast("Email is required","danger");
    } else if(this.pnum == "") {
      this.presentToast("Phone number is required","danger");
    } else if(this.address == "") {
      this.presentToast("Address is required","danger");
    } else if(this.country == "") {
      this.presentToast("Country is required","danger");
    } else if(this.state == "") {
      this.presentToast("State is required","danger");
    } else if(this.city == "") {
      this.presentToast("City is required","danger");
    } else if(this.zipcode == "") {
      this.presentToast("Zip Code is required","danger");
    } else if(this.gender == "") {
      this.presentToast("Gender is required","danger");
    } 
    else if(this.val == "") {
      this.presentToast("You have to select at least one module","danger");
    }
    else {

      

      let finalmodules = this.modules.filter((x) => {
        return x.checked == true;
      })
       this.moduletype = "MODULE ONE";
      
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: "Please wait......",
      });
      loader.present();
      

       return new Promise(resolve => {
          let body = {
            kcileregmodule: 'process_kcileregmodule',
            name: this.name,
            pnum: this.pnum,
            email: this.email,
            address: this.address,
            country: this.country,
            state: this.state,
            city: this.city,
            zipcode: this.zipcode,
            gender: this.gender,
            module: finalmodules,
            moduletype: this.moduletype 
          }

          console.log(body);
          
          this.accessserv.postData(body, 'kcileregmodule-api.php').subscribe((res:any) =>{
             if(res.success == true) {
               loader.dismiss();
               this.disabledButton = false;
               this.presentToast(res.msg,"success");
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
            this.kcileregmodule();
          }
        }
      ]
    });
    await alert.present();
  } 

}

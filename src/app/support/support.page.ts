import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {


  catname: any;
  voltime: string;

  programdata: any;
  programdata2: any;
  captiondata: any;

  caption: any;
  caption1: any;
  caption2: any;
  caption3: any;
  caption4: any;
  caption5: any;
  caption6: any;
 
  name: string = "";
  pnum: string = "";
  email: string = "";
  amount: string = "";
  redeemdate: string = "";
  message: string = "";
  id:any;

  myprice: string;

  modules = [];
  mymodules: any;

  val: string = "";

  checkedItems = []

  disabledButton;

  price: any;

  constructor(private router: Router, 
    private navCtrl: NavController,
  	private accessserv: ServiceService,
  	private storage: Storage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.loadSupport(this.id);
    this.loadPrice(this.id);
    this.loadCaptions(this.id);
  }




  showPriceInput() {
    if(this.myprice == "others") {
      document.getElementById("priceinput").style.display = "block";
      this.amount = "";
    } else {
      document.getElementById("priceinput").style.display = "none";
      this.amount = this.myprice;
    }
  }



  async loadCaptions(id) {
       
    return new Promise(resolve => {
       let body = {
         caption: "process_caption",
         catid: id
       }
       
       this.accessserv.postData(body, 'caption-api.php').subscribe((res:any) =>{
          if(res.success == true) {
            console.log(res.result);
            this.captiondata = res.result;
            
            for(let data of this.captiondata) {
              this.caption = data.caption;
              this.caption1 = data.caption1;
              this.caption2 = data.caption2;
              this.caption3 = data.caption3;
              this.caption4 = data.caption4;
              this.caption5 = data.caption5;
              this.caption6 = data.caption6;

            }

          } else {
            //this.presentAlert2("No Programs For Now");
            console.log("Error in loading captions");
          }
       },(err)=>{
           //this.presentAlert2("No Program For Now");
           console.log(err);
       });

    });

 
}



  async loadSupport(id) {
       
    return new Promise(resolve => {
       let body = {
         support: "process_support",
         catid: id
       }
       
       this.accessserv.postData(body, 'support-api.php').subscribe((res:any) =>{
          if(res.success == true) {
            console.log(res.result);
            this.programdata = res.result;
            for(let data of this.programdata) {
              this.catname = data.catname;

              this.modules.push({voldate:data.voldate,voltime:data.voltime,checked:'false'});

            }
            

          } else {
            //this.presentAlert2("No Programs For Now");
            console.log("Error in loading program forms");
          }
       },(err)=>{
           //this.presentAlert2("No Program For Now");
           console.log(err);
       });

    });

 
}




async loadPrice(id) {
       
  return new Promise(resolve => {
     let body = {
       price: "process_price",
       catid: id
     }
     
     this.accessserv.postData(body, 'price-api.php').subscribe((res:any) =>{
        if(res.success == true) {
          console.log(res.result);
          this.programdata2 = res.result;
          for(let data of this.programdata2) {
             this.price = data.price;
          }    

        } else {
          //this.presentAlert2("No Programs For Now");
          console.log("Error in loading program forms");
        }
     },(err)=>{
         //this.presentAlert2("No Program For Now");
         console.log(err);
     });

  });


}

 
  async volunteer() {
    if(this.name == "") {
      this.presentToast("Name is required","danger");
    } else if(this.email == "") {
      this.presentToast("Email is required","danger");
    } else if(this.pnum == "") {
      this.presentToast("Phone number is required","danger");
    } 
    //else if(this.amount == "") {
      //this.presentToast("Pledge Amount is required","danger");
    //} else if(this.redeemdate == "") {
      //this.presentToast("Date to Redeem is required","danger");
    //} 
    else {


      let finalmodules = this.modules.filter((x) => {
        return x.checked == true;
      })

      
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: "Please wait......",
      });
      loader.present();
      

       return new Promise(resolve => {
          let body = {
            volunteer2: 'process_volunteer2',
            program: this.catname,
            name: this.name,
            pnum: this.pnum,
            email: this.email,
            amount: this.amount,
            redeemdate: this.redeemdate,
            //availabletime: finalmodules
          }

          console.log(body);
          
          this.accessserv.postData(body, 'volunteer-api2.php').subscribe((res:any) =>{
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
            this.volunteer();
          }
        }
      ]
    });
    await alert.present();
  }
  
  
  async presentAlert2(a) {
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Close',
          handler: () => {
            this.navCtrl.navigateForward('/home');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateForward('/home');
          }
        }
      ]
    });
    await alert.present();
  }

}

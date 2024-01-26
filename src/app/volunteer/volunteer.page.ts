import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.page.html',
  styleUrls: ['./volunteer.page.scss'],
})
export class VolunteerPage implements OnInit {

  catname: any;
  voltime: string;

  programdata: any;
 
  name: string = "";
  pnum: string = "";
  email: string = "";
  message: string = "";
  id:any;

  modules = [];
  mymodules: any;

  val: string = "";

  checkedItems = []

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
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.loadPrograms(this.id);

    for(let module of this.modules) {
      module.checked = true;
    }
    
 
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



  async loadPrograms(id) {
       
    return new Promise(resolve => {
       let body = {
         program: "process_program",
         catid: id
       }
       
       this.accessserv.postData(body, 'program-api.php').subscribe((res:any) =>{
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

 
  async volunteer() {
    if(this.name == "") {
      this.presentToast("Name is required","danger");
    } else if(this.email == "") {
      this.presentToast("Email is required","danger");
    } else if(this.pnum == "") {
      this.presentToast("Phone number is required","danger");
    } else if(this.val == "") {
      this.presentToast("Please tick the time you will be available?","danger");
    } else {


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
            volunteer: 'process_volunteer',
            program: this.catname,
            name: this.name,
            pnum: this.pnum,
            email: this.email,
            availabletime: finalmodules
          }

          console.log(body);
          
          this.accessserv.postData(body, 'volunteer-api.php').subscribe((res:any) =>{
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

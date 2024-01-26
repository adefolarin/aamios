import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-kcile',
  templateUrl: './kcile.page.html',
  styleUrls: ['./kcile.page.scss'],
})
export class KcilePage implements OnInit {

  constructor(private router:Router,
    private navCtrl: NavController,
    public platform: Platform) { }

  ngOnInit() {
  }

  kcilereg() {
    this.router.navigate(['/kcilereg']);
  }

  kcileregmodule() {
    //this.router.navigate(['./give']);
    //Browser.open({ url: 'https://aam.kccconline.org/give'});

    /*this.platform.ready().then(() => {
      let browser = this.iab.create("https://aam.kccconline.org/give/pay2.php");
    });*/

    this.router.navigate(['/kcileregmodule']);
  }

  goHome() {
    this.navCtrl.navigateRoot('/home');
  } 

}

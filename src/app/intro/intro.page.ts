import { Component, OnInit, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { CapacitorVideoPlayer,Device } = Plugins;
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ToastController, LoadingController, AlertController, DomController } from '@ionic/angular';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  private video;
  private _videoPlayer: any;
  private _url: string;

  backGroundImage: any;

  videourl:SafeResourceUrl;

  btntext = "Skip";

  private vid;
  private btn;



  constructor(
    private DomSanitizer:DomSanitizer,
    private router: Router,
    private navctrl: NavController,
    private domctrl: DomController) { 
      
    }

  ngOnInit() {
     this.videourl  = this.DomSanitizer.bypassSecurityTrustResourceUrl("assets/video/aam.mp4");
     this.vid = setInterval(this.myFunction,1000);

     this.backGroundImage = this.DomSanitizer.bypassSecurityTrustResourceUrl("assets/imgs/Blur_BG.png");

     const content = document.querySelector('#myioncontent');
     const innerscroll = content.shadowRoot.querySelector('.inner-scroll');

     this.domctrl.write(() => {
       (innerscroll as any).style.background = 'url("assets/imgs/Blur_BG.png") center / contain no-repeat';
     });
  

  }
  

  navigateToLogin() {

    this.video = document.getElementsByTagName('video')[0];
    this.video.pause(); 
    
    this.router.navigate(['/sign-in']);
    
  }



  myFunction() {
    this.video = document.getElementsByTagName('video')[0];
    this.btn = document.getElementsByTagName('ion-button')[0];
    if(this.video.ended) {
      
      this.btn.innerHTML = "Continue to App";
      //alert("Good");
      clearInterval(this.vid);
    }

  }



}

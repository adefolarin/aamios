import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.page.html',
  styleUrls: ['./video-detail.page.scss'],
})
export class VideoDetailPage implements OnInit {

  id: string;
  videourl:SafeResourceUrl;
  videotitle:any;
  myid:any;

  constructor(private activatedroute: ActivatedRoute,
    private DomSanitizer:DomSanitizer,
    private accessserv: ServiceService) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    //this.videotitle = this.activatedroute.snapshot.paramMap.get('title');
    this.videourl  = this.DomSanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.id);
  }


  openVideo(video) {
    
  }

}

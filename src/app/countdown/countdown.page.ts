import { Component, OnInit } from '@angular/core';
import { Platform, NavController, AlertController, IonRouterOutlet, ToastController, 
  LoadingController } from '@ionic/angular';
  import { Router } from '@angular/router';
  import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.page.html',
  styleUrls: ['./countdown.page.scss'],
})
export class CountdownPage implements OnInit {

  x:any;
  ctime: string;
  ctime1: string;
  ctime2: string;
  ctime3: string;
  ctime4: string;
  ctime5: string;

  ftime: any;

  data:any;
  countDownDate:any;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private accessserv: ServiceService) { }


  ngOnInit() {
    this.getCountDownData();
    //this.countdown2();    
  }


  async getCountDownData()  {

            
    return new Promise(resolve => {
      let body = {
        countdown: "process_countdown",
      }
      
      this.accessserv.postData(body, 'countdown-api.php').subscribe((res:any) =>{
          if(res.success == true) { 
            this.data = res.result;
            this.ctime = this.data.ctime;
            this.ftime = this.data.ftime;
            //this.ctime4 = this.data.ctime4;
            console.log(this.data);

            //const days = [
              //"Sunday", "Monday", "Tuedsay", "Wednesday", "Thursday", "Friday", "Saturday"
            //];

            //let day = new Date();
            //let myday = days[day.getDay()];

            //let myhours = day.getHours();
            //let mymin = day.getMinutes();
            //let mysec = day.getSeconds();

            //let mytime = myhours + ":" + mymin + ":" + mysec

            //alert(mytime);

            //if(mytime < "8:30:00" && mytime < "10:00:00")  {

                this.countdown(this.ftime);
            //}

            //else if(mytime > "9:30:00" && mytime < "10:00:00")  {

              //this.countdown(this.ctime2);
            //}

          } else {
          
          }
      },(err)=>{
          console.log(err);
      });
  
    });
  
  
  }


  countdown(myctime) {

    //this.countDownDate = new Date(myctime).getTime();

    //this.countDownDate = new Date(2022,2,13,16,30).getTime();

    //this.countDownDate = new Date(countDate);

    this.countDownDate = myctime;

    // Update the count down every 1 second
    this.x = setInterval(() => {
      // Get todays date and time
      let now = new Date().getTime(); 

      // Find the distance between now and the count down date
      let distance = this.countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(now, "now", "countDownDate", this.countDownDate, "distance", distance, "days", days);

      // Output the result in an element with id="demo"
        document.getElementById("demo1").innerHTML = days + "d";
        document.getElementById("demo2").innerHTML = hours + "h";
        document.getElementById("demo3").innerHTML = minutes + "m";
        document.getElementById("demo4").innerHTML = seconds + "s";

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(this.x);
        //document.getElementById("demo").innerHTML = "EXPIRED";
        this.router.navigate(['/livetv/1']);     
        
      }
    }, 1000);

  }



  countdown2() {

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate()

    d.setFullYear(2020, 11, 3);
  
    this.countDownDate = new Date("2022-02-27 8:30:00").getTime();

    document.getElementById("demo").innerHTML =  this.countDownDate;

    //alert(this.countDownDate);

    // Update the count down every 1 second
    this.x = setInterval(() => {
      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = this.countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(now, "now", "countDownDate", this.countDownDate, "distance", distance, "days", days);

      // Output the result in an element with id="demo"
        document.getElementById("demo1").innerHTML = days + "d";
        document.getElementById("demo2").innerHTML = hours + "h";
        document.getElementById("demo3").innerHTML = minutes + "m";
        document.getElementById("demo4").innerHTML = seconds + "s";

        

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(this.x);
        //document.getElementById("demo").innerHTML = "EXPIRED";
        //this.router.navigate(['/livetv/1']);     
        
      }
    }, 1000);

  }



  liveservice() {
    //this.router.navigate(['/livetv/1']);
  }

}

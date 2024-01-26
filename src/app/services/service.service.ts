import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //channelid = 'UCwnDZT7VQlJsB_iqUM_eR3A';
  //channelid = 'UCZZPgUIorPao48a1tBYSDgg'; //live
  servicechannelid = 'UC_8_w-pM9yJXpqjMJguouLw';
  //tvchannelid = 'UC7Jq8M7s66QBScrJ2HHe9rg';
  tvchannelid = 'UCH2SnbAfs_5GEuuItw3vP-w';

	apiKey = 'AIzaSyCigpYGgD6oSf4PfKLXn1f_kT7ADo01ak0';
	//server: string = "http://localhost:8080/projects/adeajalaministry/api/"; // default
	server: string = "https://www.kccconline.org/adeajalaministry/api/"; // default

  constructor(public http : HttpClient) { }

       postData(body, file){
		   let headers = new HttpHeaders({ 
            'Content-Type': "application/json; charset=UTF-8" 
        });
		   let options = { 
            headers: headers 
        }

        return this.http.post(this.server + file, JSON.stringify(body), options)
          .timeout(59000)
		  .map(res => res); 
	    }



	getPlaylistsForChannel() {
		return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' 
		+ this.apiKey + '&channelId=' + this.servicechannelid + '&part=snippet,id&maxResults=50')
		
	}
	 
	getsingleVideos(id) {
		return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' 
		+ this.apiKey + '&channelId=' + this.servicechannelid + '&part=snippet,'+id)
	}

	getlistVideos(listid) {
		return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' 
		+ this.apiKey + '&channelId=' + this.servicechannelid + '&part=snippet,id&maxResults=50&order=date');
	}

	getLiveVideos() { // SERVICE
		return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' 
		+ this.apiKey + '&channelId=' + this.servicechannelid + '&part=snippet,id&maxResults=1&type=video&eventType=live');
	}

	getLiveVideos2() { // TV
		return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' 
		+ this.apiKey + '&channelId=' + this.tvchannelid + '&part=snippet,id&maxResults=1&type=video&eventType=live');
	}

	saveDeviceToken(token) {  

        return this.http.get(this.server + '/saveToken.php?token='+token);

     }
}

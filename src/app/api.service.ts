import { Injectable, Inject, Component } from '@angular/core';
import { Observable, interval, pipe } from 'rxjs';
import { switchMap, map, takeWhile } from 'rxjs/operators';
/*import { environment } from '../../environments/environment';*/
import { HttpClient, HttpHeaders} from '@angular/common/http';
/*import { JwtHelperService } from '@auth0/angular-jwt';
// import { LoggedinService } from '../loggedin.service';*/
import { CookieService } from 'ngx-cookie-service';
import { LOCAL_STORAGE, WINDOW } from '@ng-toolkit/universal';
import {environment} from '../environments/environment';


@Injectable()
export class ApiService {
  public nodesslurl =  environment["api_url1"];
  public api_url =  environment["api_url"];
  public jwtToken = this.cookie.get('jwtToken');
  constructor(private _http: HttpClient,public cookie:CookieService) {}

  getData(endpoint:string){
    var result = this._http.get(this.getEndpointUrl(endpoint)).pipe(map(res => res));

		return result;
  } //end getData

  
  postData(endpoint:string, source, condition){
      var result =this._http.post(this.getEndpointUrl(endpoint),{source:source,condition:condition}/*JSON.stringify(data)*/).pipe(map(res => res));
      return result;
  } //end postData
  

  postDataByEndpoint(endpoint:string){
    var result =this._http.post(this.nodesslurl +endpoint,{}/*JSON.stringify(data)*/).pipe(map(res => res));
    return result;
} //end postData

  
  putData(endpoint:string,data,id:string,is_cache_buster=true){
    if (is_cache_buster==true){
      let ran = Math.floor(Math.random() * 10000) + 1;
      var cache_buster = '?cache=' + ran.toString();
      endpoint = endpoint + cache_buster;
    }
  
    var result =this._http.put(this.getEndpointUrl(endpoint)+'/'+id,JSON.stringify(data)).pipe(map(res => res));
  
    return result;
  } //end putData
 
  
  // deleteData(endpoint:string,id:string){
  //   var result = this._http.delete(this.getEndpointUrl(endpoint)+"/"+id).pipe(map(res => res));
	// 	return result;
  // } //end deleteData

  getEndpointUrl(endpoint:string){
      return this.nodesslurl + endpoint;
  }

  customRequest(requestdata: any, endpoint: any) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': this.cookie.get('jwttoken')
    //   })
    // };
  
      var result = this._http.post( this.nodesslurl+endpoint, requestdata).pipe(map(res => res));
      return result;
    
   
  }
  
  //ip track api function
  getclientip() {
    // console.log('endpoint');
    // this.isTokenExpired()
    var result = this._http.get("https://ipinfo.io/?format=json&token=9797c42b93078a").pipe(map(res => res));
    return result;
  }




}

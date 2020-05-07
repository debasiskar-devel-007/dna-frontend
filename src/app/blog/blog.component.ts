// import { MetaService } from '@ngx-meta/core';
import { Component, OnInit ,ViewChild,Inject} from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { FacebookService, LoginResponse, UIParams, UIResponse } from 'ngx-facebook';
import { CdkNestedTreeNode } from '@angular/cdk/tree';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public blogListData:any;
  public blogtitle: any;
  public title: any;
  public profile:any;
  public blogCatList:any;
  public headertxt:any='Date';
  constructor(public cookieService: CookieService, public activatedRoute: ActivatedRoute,public apiService:ApiService,public router:Router,public FB:FacebookService) { window.scrollTo(500, 0); 
    // this.meta.setTitle('DNA Of Success - Blogs');

    // this.meta.setTag('og:description', 'Description: Latest Blogs, News and Articles on the Personal Development Industry by top experts. Stay updated with everything that is happening in the industry and participate in discussions with top professionals.');
    // this.meta.setTag('twitter:description', 'Description: Latest Blogs, News and Articles on the Personal Development Industry by top experts. Stay updated with everything that is happening in the industry and participate in discussions with top professionals.');

    // this.meta.setTag('og:keyword', 'DNA of Success Blogs, DNA Performance Blogs, Blogs on Personal Development');
    // this.meta.setTag('twitter:keyword', 'DNA of Success Blogs, DNA Performance Blogs, Blogs on Personal Development');

    // this.meta.setTag('og:title', 'DNA Of Success - Blogs');
    // this.meta.setTag('twitter:title', 'DNA Of Success - Blogs');
    // this.meta.setTag('og:type', 'website');
    // this.meta.setTag('og:url','https://dna.influxiq.com/');
    //   this.meta.setTag('og:image', '../../assets/images/logometa.jpg');

      FB.init({
        appId: '679836882810934',
        version: 'v2.9'
      });
  
  }

  ngOnInit() {

      
        this.getBlogCatList()


        if(this.activatedRoute.snapshot.params._id !=null){
          let data1:any;
          data1={
            "condition":{
              "blogcat":this.activatedRoute.snapshot.params._id
            }
         }
         this.apiService.customRequest(data1,'api1/getblogdatabycatid').subscribe(res=>{
          console.log(res)
          let resc:any=res;
          this.blogListData=resc.result;
        })
        } else {
          this.activatedRoute.data.subscribe(resolveData => {         
            this.blogListData= resolveData.blogData.result; 
            console.log(this.blogListData) 
          });
        }
    
  }

  readMoreDetails(val: any) {
    // console.log(val)
    this.title = val.blogtitle;
    this.blogtitle = this.title.replace(/[' '`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-');
    console.log(this.blogtitle)
    if (this.blogtitle != '') {
      this.router.navigateByUrl('/blog-details/' + this.blogtitle + '/' + val._id);
    }

  }


  //blog cat list

 getBlogCatList(){
   let data:any;
   data={
      "condition":{}
   }
   this.apiService.customRequest(data,'api1/getcategorydata').subscribe(res=>{
     console.log(res)
     let resc:any=res;
     this.blogCatList=resc.result;
   })
 }

 //get blog data by cat id 
 viewAllByBlogCat(val:any){
  console.log(val)
  let data:any;
    data={
      "condition":{
        "blogcat":val._id
      }
   }
  
  this.apiService.customRequest(data,'api1/getblogdatabycatid').subscribe(res=>{
    console.log(res)
    let resc:any=res;
    this.blogListData=resc.result;
  })
 }


 blogbyDate(){
this.headertxt='Date';
 }

blogbyAuthor(){
  this.headertxt='Author';

}

blogbycategory(){
  this.headertxt='Category';

}





  //FACEBOOK SHARE

  login() {
    this.FB.login()
      .then((res: LoginResponse) => {
       
        this.getProfile();
      })
      .catch();
  }
  getProfile() {
    this.FB.api('me/?fields=id,name,email,picture')
      .then((res: any) => {
       
        this.profile = res;
        
      })
      .catch((error: any) => {

      });
  }
  fbShare(val:any){
    this.title = val.blogtitle;
    this.blogtitle = this.title.replace(/[' '`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-');
    var url='https://dna.influxiq.com/blog-details/'+ this.blogtitle+'/'+val._id;
    // console.log(url)

    let params: UIParams = {
      href: url,
      method: 'share',
      quote: 'https://dna.influxiq.com'
    };
    this.FB.ui(params).then((res:UIResponse)=>{
    }).catch(facebook=>{
      // console.log(facebook)
    });

  }
  logoutWithFacebook(): void {

    this.FB.logout().then();
  }


   //twitter share

   twitterShare(val:any){
    this.title = val.blogtitle;
    this.blogtitle = this.title.replace(/[' '`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-');
    window.open('https://twitter.com/intent/tweet?url=https://dna.influxiq.com'+'/blog-details/'+this.blogtitle+'/'+val._id);
    // console.log(url)

  }

  // linkedin share 
  
  linkedinShare(val:any){
    this.title = val.blogtitle;
    this.blogtitle = this.title.replace(/[' '`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-');
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=https://dna.influxiq.com'+'/blog-details/'+this.blogtitle+'/'+val._id);
    // console.log(url)

  }


  // tumblr share 
  
  tumblrShare(val:any){
    this.title = val.blogtitle;
    this.blogtitle = this.title.replace(/[' '`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-');
    window.open('https://www.tumblr.com/share?url=https://dna.influxiq.com'+'/blog-details/'+this.blogtitle+'/'+val._id);
    // console.log(url)

  }
}

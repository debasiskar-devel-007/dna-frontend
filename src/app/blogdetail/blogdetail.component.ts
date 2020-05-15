import { MetaService } from '@ngx-meta/core';
import { Component, OnInit ,ViewChild,Inject} from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { FacebookService, LoginResponse, UIParams, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

  public blogDetailstData:any;
  public blogImage:any;
  public profile:any;
  public blogCatList:any;

  constructor(
    public meta:MetaService,
    public cookieService: CookieService, public activatedRoute: ActivatedRoute,public apiService:ApiService,public router:Router,public FB:FacebookService) {
      
      // // window.scrollTo(500, 0); 

      FB.init({
        appId: '679836882810934',
        version: 'v2.9'
      });
  
  }

  ngOnInit() {
  
    this.activatedRoute.data.forEach(res => {  
      let result:any=res;  

      this.blogDetailstData= result.blogData.res[0];
      // this.blogImage=  this.blogDetailstData.blogs_image[0].basepath +  this.blogDetailstData.blogs_image[0].image;
      console.log(this.blogDetailstData)
      
      this.meta.setTitle(this.blogDetailstData.blogtitle);

      this.meta.setTag('og:description', this.blogDetailstData.description_html);
      this.meta.setTag('twitter:description', this.blogDetailstData.description_html);
      // this.meta.setTag("twitter:card",this.blogDetailstData.blogtitle,)
  
      this.meta.setTag('og:keyword', 'DNA of Success Blogs, DNA Performance Blogs, Blogs on Personal Development');
      this.meta.setTag('twitter:keyword', 'DNA of Success Blogs, DNA Performance Blogs, Blogs on Personal Development');
  
      this.meta.setTag('og:title', this.blogDetailstData.blogtitle);
      this.meta.setTag('twitter:title', this.blogDetailstData.blogtitle);
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:url','https://dna.influxiq.com'+'/blog-details/'+this.activatedRoute.snapshot.params.blogtitle+'/'+this.activatedRoute.snapshot.params._id);
      this.meta.setTag('twitter:url','https://dna.influxiq.com'+'/blog-details/'+this.activatedRoute.snapshot.params.blogtitle+'/'+this.activatedRoute.snapshot.params._id);
  
        this.meta.setTag('og:image',  this.blogDetailstData.image);
  
        this.meta.setTag('twitter:image',  this.blogDetailstData.image);
  
      // console.log('https://dna.influxiq.com'+'/blog-details/'+this.activatedRoute.snapshot.params.blogtitle+'/'+this.activatedRoute.snapshot.params._id)
  
    });

    this.getBlogCatList();

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
  this.router.navigateByUrl('/blog/'+val._id);
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
  fbShare(){
    var url='https://dna.influxiq.com/blog-details/'+this.activatedRoute.snapshot.params.blogtitle+'/'+this.activatedRoute.snapshot.params._id;
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

   twitterShare(){

    window.open('https://twitter.com/intent/tweet?url=https://dna.influxiq.com'+'/blog-details/'+this.activatedRoute.snapshot.params.blogtitle+'/'+this.activatedRoute.snapshot.params._id);
    // console.log(url)

  }

  // linkedin share 
  
  linkedinShare(){

    window.open('https://www.linkedin.com/sharing/share-offsite/?url=https://dna.influxiq.com'+'/blog-details/'+this.activatedRoute.snapshot.params.blogtitle+'/'+this.activatedRoute.snapshot.params._id);
    // console.log(url)

  }


  // tumblr share 
  
  tumblrShare(){

    window.open('https://www.tumblr.com/share?url=https://dna.influxiq.com'+'/blog-details/'+this.activatedRoute.snapshot.params.blogtitle+'/'+this.activatedRoute.snapshot.params._id);
    // console.log(url)

  }
}

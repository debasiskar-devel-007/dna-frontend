import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { DomSanitizer } from '@angular/platform-browser';
import { FacebookService } from 'ngx-facebook';
import { MetaService } from '@ngx-meta/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";


export interface DialogDataMentorDetail { details: any; }
export interface DialogDataGalleryModal { gallery: any; }

@Component({
  selector: 'app-mentordetail',
  templateUrl: './mentordetail.component.html',
  styleUrls: ['./mentordetail.component.css']
})


export class MentordetailComponent implements OnInit {
  public p_id: any;
  public about_me: any;
  public gallerymodal: any = '';
  public mentordetail: any;
  
  constructor(public cookieService: CookieService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public router: Router, public sanitizer: DomSanitizer,
    public meta: MetaService, public FB: FacebookService, public dialog: MatDialog) {
    FB.init({
      appId: '284977756033837',
      version: 'v2.9'
    });
  }

  ngOnInit() {
    this.activatedRoute.data.forEach((res: any) => {
      if (res.mentordetail.results.res[0] != null && res.mentordetail.results.res[0].youtube_links != null && res.mentordetail.results.res[0].youtube_links != '') {
        // for (const key in object) {
        res.mentordetail.results.res[0].youtube_links = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + res.mentordetail.results.res[0].youtube_links);
        // }
        this.mentordetail = res.mentordetail.results.res[0];
      } else {
        this.mentordetail = res.mentordetail.results.res[0];
      }

      // this.meta.setTitle(this.blogDetailstData.blogtitle);

      this.meta.setTag('og:description', 'Please review our programs with the DNA Master Course.com and choose a package to get started so we can start working together!');
      this.meta.setTag('twitter:description', 'Please review our programs with the DNA Master Course.com and choose a package to get started so we can start working together!');

      this.meta.setTag('og:keyword', 'DNA Master Course Mentor Profile, Mentor Profile DNA Master Course, DNA Master Course for Mentees');
      this.meta.setTag('twitter:keyword', 'DNA Master Course Mentor Profile, Mentor Profile DNA Master Course, DNA Master Course for Mentees');

      this.meta.setTag('og:title', 'I AM A DNA OF SUCCESS MASTER MENTOR');
      this.meta.setTag('twitter:title', 'I AM A DNA OF SUCCESS MASTER MENTOR');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:url', 'https://dna.influxiq.com' + '/mentordetail/' + this.activatedRoute.snapshot.params._id);
      this.meta.setTag('twitter:url', 'https://dna.influxiq.com' + '/mentordetail/' + this.activatedRoute.snapshot.params._id);

      this.meta.setTag('og:image', this.mentordetail.image);

      this.meta.setTag('twitter:image', this.mentordetail.image);
    });
  }

  openDialogDetail(mentordetail:any) : void {
    const dialogRef = this.dialog.open(mentor_detail, {
      panelClass: 'mentorditailmodal',
      data: { details: mentordetail },
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  openDialoggallery(gallerymodal:any): void {
    const dialogRef = this.dialog.open(gallery_modal, {
      panelClass: 'gallerymodal',
      data: { gallery: gallerymodal },
     
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  safeurl(val) {
    return "https://images.influxiq.com/image.php?url=" + val + "&quality=30";
    // return val
  }

  showmore(index: any) {
    this.p_id = index.userid;
  }
}





   /************************Mentor detail mmodal component koushik***************************** */

   @Component({
    selector: 'mentor_detail',
    templateUrl: 'mentor_detail.html',
    styleUrls: ['./mentordetail.component.css']
  })
  
  export class mentor_detail {
    public detailsView:any;
    public mentordetail:any;
    constructor(
      public dialogRef: MatDialogRef<mentor_detail>,
      @Inject(MAT_DIALOG_DATA) public data: DialogDataMentorDetail) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }

  

   /************************Gallery mmodal component koushik***************************** */

   @Component({
    selector: 'gallery_modal',
    templateUrl: 'gallery_modal.html',
    styleUrls: ['./mentordetail.component.css']
  })
  
  export class gallery_modal {
    public galleryView:any;
    public gallerymodal:any;
    constructor(
      public dialogRef: MatDialogRef<gallery_modal>,
      @Inject(MAT_DIALOG_DATA) public data: DialogDataGalleryModal) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }

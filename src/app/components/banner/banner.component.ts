import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  miBanner: Banner = new Banner("","","","","");
 // miBanner!: Banner;
  isLogged = false;
  constructor(private bannerService:BannerService, private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }   

  ngOnInit(): void {
    this.bannerService.detail(1).subscribe(data => {
      this.miBanner = data;
    });

      if(this.tokenService.getToken()){
        this.isLogged = true;
        } else {
          this.isLogged = false;
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {
  isLogged = false;
  miBanner: Banner = new Banner("", "", "", "", "");
  constructor(private bannerService: BannerService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.bannerService.detail(1).subscribe(data => {
      this.miBanner = data;
    });

  }
  onLogout(): void {
    this.tokenService.logOut();
    this.router.navigate(['/inicio']);
  }
}

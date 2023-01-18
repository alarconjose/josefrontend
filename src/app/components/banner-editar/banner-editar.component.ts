import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-banner-editar',
  templateUrl: './banner-editar.component.html',
  styleUrls: ['./banner-editar.component.css']
})
export class BannerEditarComponent implements OnInit {
isLogged = false;
 banner!: Banner;
  constructor(private activatedRoute: ActivatedRoute, private bannerService: BannerService,
    private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.bannerService.detail(id).subscribe(data => {
      this.banner = data;
    });
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.bannerService.update(id, this.banner).subscribe(
      data => {
        alert("Item actualizado");
        this.router.navigate(['/panel']);
      }, err => {
        alert("Error al actualizar item");
        this.router.navigate(['/panel']);
      }
    )
  }

}

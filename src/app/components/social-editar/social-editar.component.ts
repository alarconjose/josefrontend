import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Social } from 'src/app/model/social';
import { SocialService } from 'src/app/servicios/social.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-social-editar',
  templateUrl: './social-editar.component.html',
  styleUrls: ['./social-editar.component.css']
})
export class SocialEditarComponent implements OnInit {
 isLogged = false;
social!: Social;

constructor(private activatedRoute: ActivatedRoute, private socialService: SocialService,
  private router: Router, private tokenService: TokenService) { }

ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params['id'];
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  this.socialService.detail(id).subscribe(data => {
    this.social = data;
  });
}
onUpdate(): void {
  const id = this.activatedRoute.snapshot.params['id'];

  this.socialService.update(id, this.social).subscribe(
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

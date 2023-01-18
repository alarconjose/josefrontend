import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/model/social';
import { SocialService } from 'src/app/servicios/social.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  navegadorItem: Social[] = [];
  isLogged= false;

  constructor(private socialService:SocialService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.socialService.list().subscribe(data => {
      this.navegadorItem = data;
    }
  )
  if(this.tokenService.getToken()){
    this.isLogged = true;
    } else {
      this.isLogged = false;
  }
  }
  delete(id?: number) {
    if (id != undefined) {
      this.socialService.delete(id).subscribe(
        (data) => {
          alert('Item eliminado');
          this.ngOnInit();
          
        },
        (err) => {      
          alert('No se pudo eliminar');
        }
      );
    }
  }
}



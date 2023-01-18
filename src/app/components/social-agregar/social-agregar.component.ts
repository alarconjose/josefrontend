import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Social } from 'src/app/model/social';
import { SocialService } from 'src/app/servicios/social.service';

@Component({
  selector: 'app-social-agregar',
  templateUrl: './social-agregar.component.html',
  styleUrls: ['./social-agregar.component.css']
})
export class SocialAgregarComponent implements OnInit {
  name: string ="";
  image: string="";

  constructor(private socialService:SocialService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const social = new Social (this.name, this.image);
    this.socialService.save(social).subscribe(
      data => {
        alert('Item agregado');
        window.location.reload();
      }, err => {
        alert('Error al cargar');
        window.location.reload();
      }
    );  

  }

}

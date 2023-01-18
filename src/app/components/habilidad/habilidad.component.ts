import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  habilidades: Habilidad[] = [];
  isLogged=false;

  constructor(private habilidadService:HabilidadService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.habilidadService.list().subscribe(data => {
      this.habilidades = data;
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
      this.habilidadService.delete(id).subscribe(
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

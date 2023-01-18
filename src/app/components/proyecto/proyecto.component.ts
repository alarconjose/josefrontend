import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyecto[] = [];
  isLogged= false;

  constructor(private proyectoService:ProyectoService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.proyectoService.list().subscribe(data => {
      this.proyectos = data;
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
      this.proyectoService.delete(id).subscribe(
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

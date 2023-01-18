import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyecto-agregar',
  templateUrl: './proyecto-agregar.component.html',
  styleUrls: ['./proyecto-agregar.component.css']
})
export class ProyectoAgregarComponent implements OnInit {

  image: string="";
  name: string="";
  date: string="";
  description: string="";
  url: string="";

  constructor(private proyectoService:ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const proyecto = new Proyecto (this.image, this.name, this.date, this.description, this.url);
    this.proyectoService.save(proyecto).subscribe(
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

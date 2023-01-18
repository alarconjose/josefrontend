import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidad-agregar',
  templateUrl: './habilidad-agregar.component.html',
  styleUrls: ['./habilidad-agregar.component.css']
})
export class HabilidadAgregarComponent implements OnInit {

  name: string = '';
  value!: number; 

  constructor(private habilidadService:HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const habilidad = new Habilidad (this.name, this.value);
    this.habilidadService.save(habilidad).subscribe(
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

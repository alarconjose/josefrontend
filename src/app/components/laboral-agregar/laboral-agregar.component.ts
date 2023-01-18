import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laboral } from 'src/app/model/laboral';
import { LaboralService } from 'src/app/servicios/laboral.service';

@Component({
  selector: 'app-laboral-agregar',
  templateUrl: './laboral-agregar.component.html',
  styleUrls: ['./laboral-agregar.component.css']
})
export class LaboralAgregarComponent implements OnInit {
 //isLogged=true;
  image: string ="";
  name: string="";
  title: string="";
  date: string="";
  description: string="";
  constructor(private laboralService:LaboralService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const laboral = new Laboral (this.image, this.name, this.title, this.date, this.description);
    this.laboralService.save(laboral).subscribe(
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

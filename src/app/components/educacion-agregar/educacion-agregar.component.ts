import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion-agregar',
  templateUrl: './educacion-agregar.component.html',
  styleUrls: ['./educacion-agregar.component.css']
})
export class EducacionAgregarComponent implements OnInit {

image: string= "";
school: string= "";
title: string= "";
date: string= "";
description: string= "";

  constructor(private educacionService:EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const educacion = new Educacion (this.image, this.school, this.title, this.date, this.description);
    this.educacionService.save(educacion).subscribe(
      data => {
        alert('Item agregado');
        window.location.reload(); 
      }, err => {
        alert('Error al cargar');
      
      }
    );  

  }
}

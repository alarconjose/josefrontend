import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones: Educacion[] = [];
  isLogged = false;

  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.educacionService.list().subscribe(data => {
      this.educaciones = data;
    })
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  delete(id?: number) {
    if (id != undefined) {
      this.educacionService.delete(id).subscribe(
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



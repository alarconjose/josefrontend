import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion-editar',
  templateUrl: './educacion-editar.component.html',
  styleUrls: ['./educacion-editar.component.css']
})
export class EducacionEditarComponent implements OnInit {

isLogged = false;
educacion!: Educacion;
constructor(private activatedRoute: ActivatedRoute, private educacionService: EducacionService,
  private router: Router, private tokenService: TokenService) { }

ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params['id'];
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  this.educacionService.detail(id).subscribe(data => {
    this.educacion = data;
  });
}
onUpdate(): void {
  const id = this.activatedRoute.snapshot.params['id'];

  this.educacionService.update(id, this.educacion).subscribe(
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

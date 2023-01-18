import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidad-editar',
  templateUrl: './habilidad-editar.component.html',
  styleUrls: ['./habilidad-editar.component.css']
})
export class HabilidadEditarComponent implements OnInit {
isLogged = false;
habilidad!: Habilidad;
constructor(private activatedRoute: ActivatedRoute, private habilidadService: HabilidadService,
  private router: Router, private tokenService: TokenService) { }

ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params['id'];
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  this.habilidadService.detail(id).subscribe(data => {
    this.habilidad = data;
  });
}
onUpdate(): void {
  const id = this.activatedRoute.snapshot.params['id'];

  this.habilidadService.update(id, this.habilidad).subscribe(
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

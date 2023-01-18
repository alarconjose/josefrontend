import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyecto-editar',
  templateUrl: './proyecto-editar.component.html',
  styleUrls: ['./proyecto-editar.component.css']
})
export class ProyectoEditarComponent implements OnInit {
isLogged = false;
proyecto!: Proyecto;

constructor(private activatedRoute: ActivatedRoute, private proyectoService: ProyectoService,
  private router: Router, private tokenService: TokenService) { }

ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params['id'];
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  this.proyectoService.detail(id).subscribe(data => {
    this.proyecto = data;
  });
}
onUpdate(): void {
  const id = this.activatedRoute.snapshot.params['id'];

  this.proyectoService.update(id, this.proyecto).subscribe(
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laboral } from 'src/app/model/laboral';
import { LaboralService } from 'src/app/servicios/laboral.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-laboral-editar',
  templateUrl: './laboral-editar.component.html',
  styleUrls: ['./laboral-editar.component.css']
})
export class LaboralEditarComponent implements OnInit {

  isLogged = false;
  laboral!: Laboral;

  constructor(private activatedRoute: ActivatedRoute, private laboralService: LaboralService,
    private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.laboralService.detail(id).subscribe(data => {
      this.laboral = data;
    });
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.laboralService.update(id, this.laboral).subscribe(
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

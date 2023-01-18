import { Component, OnInit } from '@angular/core';
import { Laboral } from 'src/app/model/laboral';
import { LaboralService } from 'src/app/servicios/laboral.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {
  laborales:Laboral[] = [];
 isLogged= false;

  constructor(private laboralService:LaboralService, private tokenService:TokenService) { }

  ngOnInit(): void {

    this.laboralService.list().subscribe(data => {
      this.laborales=data;
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
      this.laboralService.delete(id).subscribe(
        (data) => {
          alert('Item eliminado');
          window.location.reload();          
        },
        (err) => {      
          alert('No se pudo eliminar');
        }
      );
    }
  }
}

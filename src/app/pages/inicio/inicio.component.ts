import { Component } from '@angular/core';
import { DemoService } from 'src/app/servicios/demo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: []
})
export class InicioComponent {

  registros:any;

  constructor(public demoService:DemoService) {}

  ngOnInit(): void {
    this.listarPosts();
  }

  listarPosts(){
    this.demoService.listar().subscribe(data=>{
      console.log(data);
      this.registros = data;
    })
  }

}

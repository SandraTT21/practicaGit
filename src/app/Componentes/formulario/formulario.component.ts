import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioPrincipal: FormGroup;

  constructor(private form: FormBuilder){
    this.formularioPrincipal = form.group({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.min(5)]),
    })
    
  }

  ngOnInit(): void {
    
  }

  agregarUsuario(){
    alert('Se ha agregado el usuario');
  }

}

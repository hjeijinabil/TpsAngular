import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit{
  //On utilise ReactifFormsModules
  CarteVisite!: FormGroup;
  message:string="registred succsefull";
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.CarteVisite = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      entreprise: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]]
    });
  }

  Onclick():void {
 
console.log(this.CarteVisite.value);
  
  }
  }
  



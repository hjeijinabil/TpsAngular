import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
//DataBinding Interpolation permettent d'affichage dynamiquement la valeur dans application agular
  message: string ="DataBinding Interpolation permettent d'affichage dynamiquement la valeur dans application agular."

Onclick():void{
  console.log(this.message = "event binding qui permet reagir aux évenement utilisateures lorsque on click");
  
}

}

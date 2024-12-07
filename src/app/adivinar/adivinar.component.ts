import { Component } from '@angular/core';

@Component({
  selector: 'app-adivinar',
  templateUrl: './adivinar.component.html',
  styleUrls: ['./adivinar.component.scss']
})
export class AdivinarComponent {
  numeroGenerado: number = 0;
  mostrarFormulario: boolean = false;
  numeroIntroducido: number = 0;
  resultados: string[] = [];

  generarNumero(){
    const min = 1;
    const max = 50;
    this.numeroGenerado = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Número generado: ${this.numeroGenerado}`);
    this.mostrarFormulario = true;
  }

  adivinarNumero(){
    let mensaje: string;
    if (this.numeroIntroducido==this.numeroGenerado) {
      mensaje = "Correcto";
    } else{
      mensaje = "Falso";
    }
    this.resultados.push(mensaje); //Añade el mensaje al array de resultados, que luego se mostrará en la tabla
  }
}

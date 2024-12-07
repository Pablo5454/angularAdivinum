import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adivinum';
  counterValue:number=0;
  increase(){
    this.counterValue++;
  }
  decrease(){
    this.counterValue--;
  }
}

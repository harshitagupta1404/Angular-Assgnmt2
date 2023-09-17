import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2';
  appItems = ['Apples', 'Bananas', 'Cherries'];

  onItemAdd(event:string){
    this.appItems.push(event);
    console.log(this.appItems);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoad: boolean = false

  ngOnInit() {
    setTimeout(() => {
      this.isLoad = true
    }, 1000);
  }

}

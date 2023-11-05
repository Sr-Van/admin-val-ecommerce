import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {

  constructor(private route: Router) {}

  goRoute(event: any) {
    if(event === '') {
      this.route.navigate([`/`])
      return
    }
    let rota = event._elementRef.nativeElement.dataset.id
    this.route.navigate([`/${rota}`])
  }

}

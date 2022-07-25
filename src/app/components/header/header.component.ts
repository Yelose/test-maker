import { Component, OnInit } from '@angular/core';
import { ButtonClass } from 'src/app/models/button-class.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  buttons: ButtonClass[] = [
    new ButtonClass(1, "add subject", "fa-solid fa-circle-plus"),
    new ButtonClass(1, "add questions", "fa-solid fa-circle-plus"),
    new ButtonClass(1, "add new test", "fa-solid fa-circle-plus"),
    new ButtonClass(1, "create from existing", "fa-solid fa-circle-plus")
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}

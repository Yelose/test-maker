import { Component, OnInit } from '@angular/core';
import { ButtonClass } from 'src/app/models/button-class.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public buttons: ButtonClass[] = [
    {
      id: 1,
      text: "add subject",
      icon: "fa-solid fa-circle-plus"
    },
    {
      id: 2,
      text: "add questions",
      icon: "fa-solid fa-circle-plus"
    },
    {
      id: 3,
      text: "add new test",
      icon: "fa-solid fa-circle-plus"
    },
    {
      id: 4,
      text: "create from existing",
      icon: "fa-solid fa-circle-plus"
    }
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}

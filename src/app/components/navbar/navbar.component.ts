import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/models/page';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public pages: Page[] = [
    {
      title: "<i class='fa-solid fa-house'></i>",
      url: "/home"
    },
    {
      title: "Tests",
      url: "/tests"
    },
    {
      title: "Subjects",
      url: "/subjects"
    },
    {
      title: "Questions",
      url: "/questions"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

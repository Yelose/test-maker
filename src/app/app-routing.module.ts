import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { TestsComponent } from './pages/tests/tests.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "questions",
    component: QuestionsComponent
  },
  {
    path: "subjects",
    component: SubjectsComponent
  },
  {
    path: "tests",
    component: TestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

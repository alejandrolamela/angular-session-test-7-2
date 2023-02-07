import { AddComicComponent } from './pages/add-comic/add-comic.component';
import { ComicsDetailComponent } from './pages/comics-detail/comics-detail.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'comics',component: ComicsComponent
  },
  {
    path:'comics/:id',component: ComicsDetailComponent
  },
  {
    path:'add',component: AddComicComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

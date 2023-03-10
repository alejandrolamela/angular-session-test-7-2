import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { AddComicComponent } from './pages/add-comic/add-comic.component';

import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { ComicsDetailComponent } from './pages/comics-detail/comics-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComitComponent } from './pages/edit-comit/edit-comit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComicsComponent,
    AddComicComponent,

    NavigatorComponent,
    ComicsDetailComponent,
    EditComitComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

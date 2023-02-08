import { IComics } from './../../models/icomics';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getComics(){
    return this.http.get('http://localhost:3000/comics')

  }
// Esta funcion nos valdra para acceder a los datos del comic que queramos, a traves del id
  getComicById(id: number){

    return this.http.get(`http://localhost:3000/comics/${id}`);

  }

  postComic(comic: IComics){
    return this.http.post(`http://localhost:3000/comics/`,comic);
  }
}

import { IComics } from './../../models/icomics';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit{

  comicList!: IComics[];
// Si queremos traer los comics de nuestro servidor aqui, tenemos qu einstaciarlo
// con este constructor
  constructor(private api: ApiService){}

ngOnInit(): void {
  this.api.getComics().subscribe((data:any)=> {
    this.comicList = data;

  })
}




  

}

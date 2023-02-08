import { IComics } from './../../models/icomics';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.scss']
})
export class ComicsDetailComponent implements OnInit{
  id!: number;
  comic!: IComics;
// Como queremso recoger la funcion getcomic by id y esta en nuestro services
// en el constructor la traemos con apiservice y activated route es para recoger 
// los parametros de la ruta comic id 
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params)=>{
      // El number lo ponemos para que me tranforme el params.get id en numero
      this.id = Number(params.get('id'));
      console.log(this.id);
    })
// Esta funcion es para recoger el comic y la de arriba para recoger el id
    this.api.getComicById(this.id).subscribe((data: any)=> {
      this.comic = data;

    })
  }

  editComic(){
    this.api.setComic(this.comic, this.id);
    this.router.navigate(['edit']);
  }


}

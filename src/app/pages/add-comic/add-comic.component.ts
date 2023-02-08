import { IComics } from './../../models/icomics';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.scss']
})
export class AddComicComponent implements OnInit{

  comicForm!: FormGroup;

  constructor(private form: FormBuilder, private api: ApiService, private route: Router){}

  ngOnInit(): void {
    // Aqui no ponemos el identifierName, porque lo genera solo, los campos Title,author... es porque 
    // son las propiedades del comic
    this.comicForm = this.form.group({
      title: ["", [Validators.required]],
      author: ["", [Validators.required]],
      company: ["", [Validators.required]],
      
    })
  }

  addComic(){
    if(this.comicForm.valid){
      let newComic: IComics = this.comicForm.value;
      this.api.postComic(newComic).subscribe((response)=> {
        console.log(response);
        this.comicForm.reset();
        this.route.navigate(["/comics"])
      })
    }
   
  }

}

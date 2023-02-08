import { IComics } from './../../models/icomics';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-comit',
  templateUrl: './edit-comit.component.html',
  styleUrls: ['./edit-comit.component.scss']
})
export class EditComitComponent implements OnInit{

  editForm!: FormGroup;
  comic: IComics = this.api.comic;
  id: number=this.api.id;
  submitted: boolean = false;

  constructor(private api: ApiService, private route: Router, private form: FormBuilder){}

  ngOnInit(): void {
    
    if(!this.api.id){
      this.route.navigate(['comics']);
    }
    this.editForm = this.form.group({
      title: [this.comic.title, [Validators.required]],
      author: [this.comic.author, [Validators.required]],
      company: [this.comic.company, [Validators.required]],
      
    })
// Este codigo es para cuando vamos rellenando el formulario se ira escribiendo en la parte de abajo
// asi podemos ver los cambios en tiempo real
    this.editForm.valueChanges.subscribe((data)=> {
      this.comic = data;
    })
  }

  editComic(){
    this.submitted = true;
    if(this.editForm.valid){
      let updatedComic: IComics = this.comic;
      updatedComic.id = this.id;
      this.api.putComic(updatedComic).subscribe((response)=> {
        console.log(response);
        this.editForm.reset();
        this.submitted = false;
        this.route.navigate(["/comics"])
      })
    }
   
  }

}

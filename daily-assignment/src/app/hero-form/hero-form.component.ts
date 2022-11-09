import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent implements OnInit {
  //@ViewChild("f") mioForm!: NgForm altro metodo
  powers = ['Forte', 'Fortissimo', 'Ricco'];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    // console.log(this.mioForm.value)
    console.log(form);
  }
}

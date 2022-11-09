import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css'],
})
export class HeroFormReactiveComponent implements OnInit {
  form!: FormGroup;
  powers = ['Forte', 'Fortissimo', 'Ricco'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   name: new FormControl(null, []),
    //   alterEgp: new FormControl(null, []),
    //   power: new FormControl(null, []),
    //   enemy: new FormControl(null, []),
    //   planet: new FormControl(null, []),
    //   weakness: new FormControl(null, []),
    // });

    this.form = this.fb.group({
      name: [],
      alterEgp: [],
      power: [],
      enemy: [],
      planet: [],
      weakness: [],
    });
  }

  getFormControl(field: string) {
    return this.form.get(field);
  }

  onSubmit(): void {
    console.log(this.form);
    //this.form.reset();
  }
}

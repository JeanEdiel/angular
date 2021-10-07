import { Component, OnInit } from '@angular/core';

interface Pessoa {
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})

export class TwoWayDataBindingComponent implements OnInit {

  nome: string = 'abc';

  pessoa: Pessoa = {
    nome: 'Jean',
    idade: 28
  };

  constructor() { }

  ngOnInit(): void {
  }

}

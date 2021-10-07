import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://loiane.training/';
  cursoAngular: boolean = true;
  urlImage: string = 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15991/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png';
  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular';
  valorInicial: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  botaoClicado(): any {
    alert('Botão Clicado');
  }

  onKeyUp(evento: KeyboardEvent): void {
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor): void {
    this.valorSalvo = valor;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento): void {
    console.log(evento.novoValor);

  }
}

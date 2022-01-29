import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent{

  pessoas = [ { nome: 'Camila Nogueira', cidade: 'Mauá', estado: 'SP',
  status: 'ativo'},
{ nome: 'Felipe Miranda', cidade: 'São Paulo', estado: 'SP',
  status: 'inativo'},
{ nome: 'Rafael Genari', cidade: 'São Bernardo do Campo', estado: 'SP',
  status: 'ativo'},
{ nome: 'Caio Macedo', cidade: 'Balneario Camburiu', estado: 'SC',
  status: 'inativo'},
{ nome: 'Maria Joaquina', cidade: 'Uberlândia', estado: 'MG',
  status: 'ativo'},
{ nome: 'Wesley Guimarães', cidade: 'São Caetano do Sul', estado: 'SP',
  status: 'inativo'}];

  alternaStatus(pessoa: any){

    if (pessoa.status.toUpperCase() === 'INATIVO') {
      this.pessoas.map((p)=>{
          if (p.nome === pessoa.nome) {
            p.status = 'ativo';
          }
      });


      }else{
        this.pessoas.map((p)=>{
          if (p.nome === pessoa.nome) {
            p.status = 'inativo';
          }
      });
      }

  }


}

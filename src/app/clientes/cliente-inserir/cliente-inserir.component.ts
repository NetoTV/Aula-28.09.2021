import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})
export class ClienteInserirComponent {
  @Output() clienteAdicionado = new EventEmitter();
  nome: string | undefined;
  fone: string | undefined;
  email: string | undefined;
  onAdicionarCliente() {
    const cliente = {
      nome: this.nome,
      fone: this.fone,
      email: this.email,
    };
    this.clienteAdicionado.emit(cliente);
  }
}

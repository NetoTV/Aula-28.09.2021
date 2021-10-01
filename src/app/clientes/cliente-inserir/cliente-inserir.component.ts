import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})
export class ClienteInserirComponent {
  constructor(public clienteService: ClienteService) { }
  //remover
  @Output() clienteAdicionado = new EventEmitter<Cliente>();
  //remover
  nome: string | undefined;
  fone: string | undefined;
  email: string | undefined;
  onAdicionarCliente(form: NgForm) {
    if (form.invalid) {
      return;
    }
    //remover
    const cliente: Cliente = {
      nome: form.value.nome,
      fone: form.value.fone,
      email: form.value.email,
    };
    this.clienteService.adicionarCliente(
      form.value.nome,
      form.value.fone,
      form.value.email
    );
    //remover
    this.clienteAdicionado.emit(cliente);
  }
}

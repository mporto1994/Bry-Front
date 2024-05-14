import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { cpf } from 'cpf-cnpj-validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  formatCPF(event: any) {
    const input = event.target as HTMLInputElement;
    let cpfValue = input.value.replace(/\D/g, '');
    cpfValue = cpfValue.slice(0, 11);
    cpfValue = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    input.value = cpfValue;
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      image: [''],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value)
        .subscribe((response: any) => {
          console.log('Usuário criado com sucesso:', response);
        }, (error: any) => {
          console.error('Erro ao criar usuário:', error);
        });
    }
  }

  updateUser(userId: number): void {
    if (this.userForm.valid) {
      this.userService.updateUser(userId, this.userForm.value)
        .subscribe((response: any) => {
          console.log('Usuário atualizado com sucesso:', response);
        }, (error: any) => {
          console.error('Erro ao atualizar usuário:', error);
        });
    }
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId)
      .subscribe((response: any) => {
        console.log('Usuário excluído com sucesso:', response);
      }, (error: any) => {
        console.error('Erro ao excluir usuário:', error);
      });
  }

  onFileSelected(event: Event) {
    if (!event || !event.target) return;

    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;

    if (!file) return;
  }
}

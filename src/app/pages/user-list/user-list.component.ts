import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [
    { id: 0, name: 'Fulano', cpf: 'dspmçdsmçdlm', image: "https://img.freepik.com/fotos-gratis/vista-lateral-de-uma-mulher-jovem-e-bonita-com-pele-limpa-e-saudavel-aparencia-natural-sem-maquiagem-olhando-para-a-esquerda-e-sorrindo-em-pe-sobre-uma-parede-branca_176420-34093.jpg?w=1380&t=st=1715689716~exp=1715690316~hmac=0f7d976e09904fff337a11b1c59f3c3f9f9bf8f9111eb72192117304f09374a7" },
    { id: 0, name: 'Fulano', cpf: 'dspmçdsmçdlm', image: "https://img.freepik.com/fotos-gratis/vista-lateral-de-uma-mulher-jovem-e-bonita-com-pele-limpa-e-saudavel-aparencia-natural-sem-maquiagem-olhando-para-a-esquerda-e-sorrindo-em-pe-sobre-uma-parede-branca_176420-34093.jpg?w=1380&t=st=1715689716~exp=1715690316~hmac=0f7d976e09904fff337a11b1c59f3c3f9f9bf8f9111eb72192117304f09374a7" },
    { id: 0, name: 'Fulano', cpf: 'dspmçdsmçdlm', image: "https://img.freepik.com/fotos-gratis/vista-lateral-de-uma-mulher-jovem-e-bonita-com-pele-limpa-e-saudavel-aparencia-natural-sem-maquiagem-olhando-para-a-esquerda-e-sorrindo-em-pe-sobre-uma-parede-branca_176420-34093.jpg?w=1380&t=st=1715689716~exp=1715690316~hmac=0f7d976e09904fff337a11b1c59f3c3f9f9bf8f9111eb72192117304f09374a7" }
  ];
  ngOnInit(): void { }

  constructor(private userService: UserService) { }

  // ngOnInit(): void {
  //   this.userService.ListUsers().subscribe(
  //     (data: User[]) => {
  //       this.users = data.map(user => {
  //         user.cpf = "*********-**";
  //         return user;
  //       });
  //     },
  //     error => {
  //       console.log('Error fetching user list:', error);
  //     }
  //   );
  // }

  // anonymizeCpf(cpf: string): string {
  //   return cpf.replace(/\d/g, '*');
  // }
}

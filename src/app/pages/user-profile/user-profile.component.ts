import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User = { id: 0, name: 'Fulano', cpf: 'dspmçdsmçdlm', image: "https://img.freepik.com/fotos-gratis/vista-lateral-de-uma-mulher-jovem-e-bonita-com-pele-limpa-e-saudavel-aparencia-natural-sem-maquiagem-olhando-para-a-esquerda-e-sorrindo-em-pe-sobre-uma-parede-branca_176420-34093.jpg?w=1380&t=st=1715689716~exp=1715690316~hmac=0f7d976e09904fff337a11b1c59f3c3f9f9bf8f9111eb72192117304f09374a7" };

  editMode: boolean = false;
  profileForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {

    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      cpf: new FormControl({ value: '', disabled: true }),
      image: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe(
      (user: User) => {
        this.user = user;

        this.profileForm.patchValue({
          name: user.name,
          cpf: user.cpf,
          image: user.image
        });
      },
      (error) => {
        console.error('Erro ao carregar usuário:', error);
      }
    );
  }

  enableEdit(): void {
    this.editMode = true;
  }

  saveChanges(): void {

    this.editMode = false;
  }

  deleteUser(): void {
    this.router.navigate(['/user/list']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  returnUrl!: string;
  loginUsuarioForm!: FormGroup;
  showSpinner = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
  
  onLogin() {
    this.showSpinner = true;
    this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/pokemon/pokedex']);
  }

}

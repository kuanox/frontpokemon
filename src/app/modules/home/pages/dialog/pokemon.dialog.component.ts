import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { Pokemon } from 'src/app/shared/models/pokemon/pokemon';

@Component({
  selector: 'pokemondialog',
  templateUrl: './pokemon.dialog.component.html',
  styleUrls: ['./pokemon.dialog.component.css']
})
export class PokemonDialogComponent implements OnInit {

  model:            any = {};
  showSpinner       = false;
  toppingsControl   = new FormControl([]);

  @ViewChild(NgForm) companyForm!: NgForm;
  
  constructor(
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<PokemonDialogComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Pokemon) {
    }

  ngOnInit() {
    console.log("this.data");
    console.log(this.data);
    this.model = {};
    this.model = this.data;
  }

  cancelar() {
    this.companyForm.resetForm;
    this.model = '';
    console.log("SALE DEL POPUP!!!!!!!");
    this.dialogRef.close();
  }

  
}


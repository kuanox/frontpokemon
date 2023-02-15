import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pokemon } from 'src/app/shared/models/pokemon/pokemon';
import { PokedexService } from '../../service/pokedex.service';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from "@angular/material/dialog";

import { PokemonDialogComponent } from '../dialog/pokemon.dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['url_image_home','national', 'name', 'species', 'height', 'weight', 'abilities', 'options'];
  dataSource = new MatTableDataSource<Pokemon>([]);

  pokemones:            Pokemon[] = [];
  data:                 Pokemon[] = [];
  showSpinner           = false;

  limit!:                number; 
  offset!:               number;
  totalSize             = 0;

  pageEvent!: PageEvent;
  public array: any;
  public pageSize = 5;
  public currentPage = 0;


  constructor(
    private pokedexService: PokedexService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.showSpinner = true;
    this.limit = 30;
    this.offset = 0;
    this.data = [];
    this.dataSource.data = [];
    this.loadAllPokemones(this.limit, this.offset);
    this.showSpinner = false;
  }

  public loadAllPokemones(limit: number, offset: number) {
    this.showSpinner = true;
    this.pokedexService.fetchAllPokemones(limit, offset)
      .subscribe(
        response => {
          this.toastr.success('', 'OK Pokemones', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          //this.dataSource.data = [];
          console.log('response');
          console.log(response);
          //this.dataSource.data = response;
          this.data = this.dataSource.data;
          response.forEach(element => {
            this.data.push(element);
          });          
          this.dataSource.data = this.data;

          this.dataSource.paginator = this.paginator;
          this.array = this.data;
          this.totalSize = this.array.length;
          this.showSpinner = false;
        },
        error => {
          this.toastr.error(error.message, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          console.log(error.message);
          this.showSpinner = false;
        }
      );
  }

  public handlePage(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;

    console.log("this.totalSize : " + this.totalSize);

    console.log("this.currentPage : " + this.currentPage);
    console.log("this.pageSize : " + this.pageSize);
    console.log("this.pageSize * this.currentPage + this.pageSize : " + (this.pageSize * this.currentPage + this.pageSize) );
    if ( (this.pageSize * this.currentPage + this.pageSize) == this.totalSize) {
      this.offset = this.pageSize * this.currentPage + this.pageSize;
      console.log("this.limit : " + this.limit);
      console.log("this.offset : " + this.offset);
      this.loadAllPokemones(this.limit, this.offset);
    }
    //this.iterator();
  }


  buscar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toUpperCase();

  }

  pokemonSelected(data: object) {    
    console.log("Selectioned : " + data);
    const dialogRef = this.dialog.open(PokemonDialogComponent, {
      width: '70%',
      data: data
    })
    
  }

}
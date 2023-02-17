import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from 'src/app/shared/models/pokemon/pokemon';
import { PageEvent } from '@angular/material/paginator';

const baseUrl: string = environment.basePokemonServiceUrl + 'pokedex/';

@Injectable({ providedIn: 'root' })
export class PokedexService {

    constructor(private httpClient: HttpClient) { }

    public fetchAllPokemones(limit: number, offset: number): Observable<Pokemon[]> {
        return this.httpClient.get<Pokemon[]>(baseUrl + `all/?limit=${limit}&offset=${offset}`);
    }
    
    public fetchById(id: number): Observable<Pokemon> {
        return this.httpClient.get<Pokemon>(baseUrl + `detail/${id}`);
    }

    public create(company: Pokemon): Observable<any> {
        return this.httpClient.post<any>(baseUrl + 'create', company);
    }

    public update(company: Pokemon): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': '*/*'}); 
        let data = JSON.stringify(company);
        console.table("fetchCompanies => data => " + data);
        return this.httpClient.put<any>(baseUrl + `update`, company, {headers: headers});
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(baseUrl + `delete/${id}`);
    }      

}

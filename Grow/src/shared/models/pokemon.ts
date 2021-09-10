import { Base } from "./base";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class PokemonModel extends Base {
    name: string;
    constructor(private http: HttpClient) {
        super();
    }

    public bringPokes() {
        return this.http.get(this.url).subscribe(
            res => {
                return res;
            },
            err => {console.log(err);}
        )
    }

    public filterPokes(pokemon: string) {
        this.http.get(this.url).subscribe(
            (res: any) => {
                const result = res.results.find(x => x.name === pokemon);
                const url = result.url;

                const html = `<span style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">${url}</span>`
                const _window = window.open();
                _window.document.write(html);


            },
            err => {console.log(err);}
        )
    }
}
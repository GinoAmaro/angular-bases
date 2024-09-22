import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <p>El número es: {{contador}}</p>

<button (click)=contadorBy(1)>+1</button>
<button (click)="resetBy()">Reset</button>
<button (click)=contadorBy(-1)>-1</button>
    `,
})
export class CounterComponent {
    constructor() { }
    public contador: number = 40;
    guardarContador: number = this.contador;

    contadorBy(numero: number): void {
        this.contador += numero;
    }

    resetBy(): void {
        this.contador = this.guardarContador;
    }
}
import { Time } from '@angular/common';


export class Evento {
    constructor(
        public titulo?: string,
        public data?: Date,
        public hora?: Time,
        public descricao?: string
    ) {}
}
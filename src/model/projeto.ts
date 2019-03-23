export class Projeto{
    constructor(
        public titulo?: string,
        public dataEntrega?: Date,
        public telefone?: string,
        public nomeContratente?: string,
        public emailContratante?: string,
        public descricao?: string
    ){}
}
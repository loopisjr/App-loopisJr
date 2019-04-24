export class Projeto{
    constructor(
        public id?: number,
        public titulo?: string,
        public dataEntrega?: Date,
        public telefone?: string,
        public nomeContratante?: string,
        public emailContratante?: string,
        public descricao?: string
    ){}
}

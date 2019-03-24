import { TipoUsuario } from './TipoUsuario';
import { Projeto } from './projeto';

export class Funcionario{
    constructor(
        public email?: string,
        public senha?: string,
        public nome?: string,
        public cargo?: string,
        public perfilGithub?: string,
        public habilidades?: string,
        public tipoFuncionario?: TipoUsuario,
        public projeto?: Projeto[]
    ){}
}
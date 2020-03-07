namespace empresa{
    export class Pessoa{
        private nome:string;
        private cpf:string;

        constructor(nome:string, cpf:string){
            this.cpf = cpf;
            this.nome = nome;
        }
    }
}
namespace empresa{
    export class Pessoa{
        //informação da classe
        private nome:string;
        private cpf:string;

        constructor(nome:string, cpf:string){
            this.cpf = cpf;
            this.nome = nome;
        }

        getCpf():string{
            return this.cpf;
        }

        getNome():string{
            return this.nome;
        }
    }
}
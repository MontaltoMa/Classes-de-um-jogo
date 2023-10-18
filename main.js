class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque = this.obterAtaque();
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
    
    obterAtaque() {
        if (this.tipo === "Mago") {
            return "Magia";
        } else if (this.tipo === "Guerreiro") {
            return "Espada";
        } else if (this.tipo === "Monge") {
            return "Artes Marciais";
        } else if (this.tipo === "Ninja") {
            return "Shuriken";
        }
        return "Ataque desconhecido";
    }
}

let statusHeroi = new Heroi("Marcos", 24, "Mago");
statusHeroi.atacar();
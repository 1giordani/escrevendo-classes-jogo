// Classe genérica para representar um herói de aventura.
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método: uma função que pertence à classe.
  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      console.log(`Tipo de herói inválido: ${this.tipo}. Use mago, guerreiro, monge ou ninja.`);
      return;
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Cada chamada com new cria um objeto com suas próprias propriedades.
const herois = [
  new Heroi("Giordani", 30, "mago"),
  new Heroi("Arthur", 25, "guerreiro"),
  new Heroi("Li", 40, "monge"),
  new Heroi("Akira", 22, "ninja")
];

// Percorre todos os objetos e chama o método atacar de cada um.
for (const heroi of herois) {
  heroi.atacar();
}

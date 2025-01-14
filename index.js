class CLASSES {
    constructor(funcao, poder) {
      this.funcao = funcao;
      this.poder = poder;
    }
  
    atacar() {
      console.log(`O ${this.funcao} atacou usando ${this.poder}`);
    }
  }
  
  for (let i = 1; i <= 4; i++) {
    let poderes;
  
    if (i === 1) {
      poderes = new CLASSES("guerreiro", "espada");
    } else if (i === 2) {
      poderes = new CLASSES("mago", "magia");
    } else if (i === 3) {
      poderes = new CLASSES("monge", "artes marciais");
    } else if (i === 4) {
      poderes = new CLASSES("ninja", "shuriken");
    }
  
    // Chama o método atacar para cada personagem
    poderes.atacar();
  }
  
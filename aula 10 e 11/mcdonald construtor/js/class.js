class Fatura {
    constructor(nome, artigo) {

        this.name = nome;
        this.artigo = [artigo];
    }
    addArtigo(art) {
        this.artigo.push(art);
    }
}

class Artigo {
    constructor(nomeComida, extra = undefined) {
        this.name= nomeComida;
        this.extra = extra;
    }

}
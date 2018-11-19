
/** 
* @param {number} combustivel .
* @param {String} cor .
* @param {number} numeroRodas .
*/


class Veiculo {
    constructor (combustivel,cor,numeroRodas=2){
        this.combustivel = combustivel;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
        this.contaQuilometros = 0;
    }
    andar(distancia=1){
        this.contaQuilometros +=distancia;
        
        //return "andou " +distancia +"Km";
    }
    
    

}

// var v1 = new Veiculo ("gasoleo", "red",4);

// v1.andar(10);

// console.log("v1 contaQuilometros:", v1.contaQuilometros);


class Automovel extends Veiculo{
    
    constructor(combustivel,cor,numeroAssentos,numeroPortas){
        super(combustivel,cor,4);
        this.numeroAssentos=numeroAssentos;
        this.numeroPortas=numeroPortas;
        this.numeroVolantes=1;
        this.litrosDeposito=10;


    }
    porCombustivel(){
        this.litrosDeposito+=litros;
    }
    tirarCombustivel(litros){
        this.litrosDeposito-=litros;
    }

    andar(distancia=1){
        super.andar(distancia);
        this.litrosDeposito-=distancia;
        return "Gastou " +distancia +" litros";
    }
    
}

var auto1= new Automovel ("Gasolina95", "grey", 2,3);
auto1.andar();
console.log()
const classificacao = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
let qtdVitorias = 10;
let qtdDerrotas = 10;
let saldoVitorias = 0;
let classificador  = 0;

function calcularSaldoVitoria(qtdVitorias, qtdDerrotas){
    let saldo = 0;
    if(qtdVitorias >= qtdDerrotas){
        saldo = qtdVitorias - qtdDerrotas;
        return saldo;
    }else{
        saldo = 0;
        return saldo;
    }
}

function classificarRank(rank){
    let classificar = 0
    if(rank >= 101){
        classificar = 6;
    } else if(rank >= 91 && rank <= 100){
        classificar = 5;
    } else if(rank >= 81 && rank <= 90){
        classificar = 4;
    } else if(rank >= 51 && rank <= 80){
        classificar = 3;
    } else if(rank >= 21 && rank <= 50){
        classificar = 2;
    } else if(rank >= 11 && rank <= 20){
        classificar = 1;
    } else {
        classificar = 0;
    }
    return classificar;
}

saldoVitorias = calcularSaldoVitoria(qtdVitorias, qtdDerrotas);

console.log("O Herói tem de saldo de " + saldoVitorias, "está no nível de " + classificacao[classificador = classificarRank(saldoVitorias)]);


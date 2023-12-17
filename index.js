const calcularRank = (vitoria) =>{

    let rank = ''

    if(vitoria <= 10){
        rank = 'Ferro'
    }else if(vitoria > 10 && vitoria <= 20){
        rank = 'Brozen'
    }else if(vitoria > 20 && vitoria <= 50){
        rank = 'Prata'
    }else if(vitoria > 50 && vitoria <= 80){
        rank = 'Ouro'
    }else if(vitoria > 80 && vitoria <= 90){
        rank = 'Diamand'
    }else if(vitoria > 91 && vitoria <= 100){
        rank = 'Lendario'
    }else if(vitoria > 100){
        rank = 'Imortal'
    }

    return console.log(rank)
}

calcularRank(50)

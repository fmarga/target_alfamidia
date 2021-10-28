function start(){
    var x1 = Math.floor(Math.random()* 11);
    var y1 = Math.floor(Math.random()* 11);
    var z1 = Math.floor(Math.random()* 11);

    /* maneira mais simples de entrar com os dados
    let x2 = prompt('Entre com o valor de x');
    let y2 = prompt('Entre com o valor de y');
    let z2 = prompt('Entre com o valor de z');
    alert(Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1)));
    */

    var x2;
    var y2;
    var z2;
    var distancia = 10;
    var contador = 1;
    
    while((distancia > 1) && (contador <= 10)){
        x2 = prompt('Entre com o valor de x');
        y2 = prompt('Entre com o valor de y');
        z2 = prompt('Entre com o valor de z');
        distancia = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1));
        alert('A distância ficou em ' + distancia);

        if(distancia < 1){
            alert('Parabéns! Você chegou no alvo.');
        } else {
            alert('Tente mais uma vez, essa é sua tentativa ' + contador + ' de 10.');
        }

        contador++;
    }
    
    return;
}
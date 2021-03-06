const P1 = 8;
const P2 = 9; 
const P3 = 10;
const P4 = 7;
var CMenor = P1;
if( P2 < P1 ){
    CMenor = P2;
}
else if( P3 < P2 ){
    CMenor = P3;

}
else{
    CMenor = P4;
}

var resultado = (P1 + P2 + P3 + P4 - CMenor)/3;

console.log(resultado);
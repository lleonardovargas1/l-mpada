
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada'); // primeiro chamei ela pro javascript  usando const  e document.elementbyid 

function LigarLampada(){
 lampada.src="lampada/lampada-acesa.png"; // criei uma funcao para ligar a lampada e botei a foto ali dentro e criei uma outra funçao para desligar 
}
function DesligarLampada(){
 lampada.src="lampada/lampada-apagada.png";
}
ligar.addEventListener("click", LigarLampada) // esse ligar é o botao ali em cima da const, quando eu chamo ele "ligar" eu adicinei um evento para o click ligar  a lampada
desligar.addEventListener("click", DesligarLampada);




 // resumidamente: quando eu clicar no botao ele vai ligar a lampada pois criei uma funcao ligar lampada com ela acesa e depois criei um evento com  um click para ligar  e chamei ela "LigarLampada"


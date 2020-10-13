var tariffa = parseFloat(0.21);
var distanza = parseInt(prompt("distanza da percorrere??(in km )")) ;
var prezzo_finale=  tariffa * distanza ;
var eta=prompt("quanti anni hai");

console.log(tariffa);
 // prompt("quanti anni hai");

if ( eta < 18 ) {
    prezzo_finale = (prezzo_finale * 0.8) ;
}
else if (eta > 60) {
    prezzo_finale = (prezzo_finale * 0.6) ;
}
document.getElementById('prezzo_biglietto').innerHTML= 'Il prezzo del biglietto è € ' + prezzo_finale;
 console.log("Il prezzo del biglietto è" + prezzo_finale);

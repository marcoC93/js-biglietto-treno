// // Il programma deve chiedere all'utente il numero di km da percorrere e la sua età.
// Con i dati inseriti deve quindi calcolare il corretto costo del biglietto in base a queste regole:
// il prezzo del biglietto dipende dalla distanza da percorrere e costa € 0.21 / km
// è previsto uno sconto del 20% per il minorenni
// gli over 65 hanno diritto ad uno sconto del 40%

// prezzo standard
var  tariffa = 0.21;
// sconto minorenni
var sconto_minorenni = 20 ;
// sconto anziani
var sconto_over = 40 ;
// Chiedo l'età dell'utente
var eta= parseInt(prompt("quanti anni hai??")) ;
// Chiedo la distanza da percorrere
var km = parseInt(prompt("quanti km devi percorrere?"));

if ( (isNaN(eta) == false) && (isNaN(km) == false) && (km > 0) && (eta > 0) )   {
    // Calcolo il prezzo prezzo_finale standard
    var prezzo_biglietto = tariffa * km ;


     //  se l'eta dell'utente e minore di 18 anni (minorenne) appliica uno sconto del 20%

    if (eta < 18 ) {
        var sconto =  ((prezzo_biglietto * sconto_minorenni )/100);
        prezzo_biglietto = prezzo_biglietto - sconto ;
    }
    else if ( eta > 65) {
        var sconto =  ((prezzo_biglietto * sconto_over )/100);
        prezzo_biglietto = prezzo_biglietto - sconto ;
    }



    //  output nell'HTML

    document.getElementById("prezzo_biglietto").innerHTML="Il prezzo del biglietto è: €" + prezzo_biglietto.toFixed(2) ;


    // console.log( sconto);
    console.log(eta, km, prezzo_biglietto);



}
else {
    alert("Devi inserire un numero.Ricarica la pagina!!")
}

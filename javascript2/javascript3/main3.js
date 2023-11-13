let nombre1 = parseInt(prompt("Saisir le 1 nombre"));
let nombre2 = parseInt(prompt("Saisir le 2 nombre"));

if (nombre1>0 && nombre2>0) {
    console.log("positif");
} else if ( nombre1<0 && nombre2<0) { 
    console.log("positif");
} else if (nombre1 <0 || nombre2<0) {
    console.log("negatif");
} else if (nombre1===0 || nombre2 ===0) {
    console.log("wesh");
}
let nombre = prompt("Saisir le nombre de notes");
let notes = [] 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note "));
   notes.push(note);
}


let add = 0
for(let i=0; i< nombre ; i++)  {
add= add+ notes[i];
}
moyenne= add/ nombre;
console.log (moyenne);





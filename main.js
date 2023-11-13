document.getElementById("form").onsubmit = function (e) {
    e.preventDefault();
    console.log("bonjour");
    let myName = document.getElementById("name").value;
    console.log(myName);
    let firstname = document.getElementById("firstname").value;
    console.log(firstname);
    let email = document.getElementById("email").value;
    console.log(email)
    let MyVar = []
    MyVar.push(myName)
    MyVar.push(firstname)
    MyVar.push(email)
console.log(MyVar)
};


let nombre = prompt("Saisir le nombre de notes");
let notes = [] 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note "));
   notes.push(note);
}







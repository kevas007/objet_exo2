//exo1
let  personnage  ={
    nom : "san", 
    prenom : "goku",
    sePresenter:function () {
        return this.nom + " "+ this.prenom
    }

}

console.log(`Bonjour je m'appelle ${personnage.sePresenter()}`);
//exo2
// let personnage ={
//     nom : "san", 
//     prenom : "goku",
//     nomdetacommande() {
//         this.age = prompt('votre age');
//         alert(`${this.nom} à ${this.age} ans`)
//     }
// }
// personnage.nomdetacommande();
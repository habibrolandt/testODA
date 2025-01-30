// Exercice 1
const calc = (array, n1, n2) => {
    let sum = 0;
    if (n1 >= 0 && n1 <= n2 && n2 < array.length
        && n1 < n2) {
        for (let i = n1; i <= n2; i++) {
            sum += array[i];
        }
    }
    return sum;
}
console.log(calc([1, 2, 3, 4, 5, 6], 1, 4))




// Gestion des taches (Exercice 2)

const ajouteTache = () => {
    let tache = document.getElementById("tache").value;
    let listeTache = document.getElementById("listeTache");
    let li = document.createElement("li");
    li.innerHTML = tache;
    listeTache.appendChild(li);
}

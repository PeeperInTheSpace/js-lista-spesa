console.log("JS Ok!")

/*

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

*/

const groceryList = ['Latte','Pane','Acqua','Cereali','Patatine','Frutta','Verdura'];

const divContainer = document.getElementById('grocerylist');

divContainer.innerHTML = '';

let counter = 0;

while(counter < groceryList.length){

    console.log(groceryList[counter]);

    divContainer.innerHTML += `<h2> Cibo: ${groceryList[counter]} </h2>`;
    counter++;
}
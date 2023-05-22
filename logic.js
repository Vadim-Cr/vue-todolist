// * Rifare l’esercizio della to do list.
// * formato da due proprietà:

//! MILESTONE 1
//*  - text, una stringa che indica il testo del task
    //todo Stampare all’interno di una lista HTML un item per ogni task.
    const { createApp } = Vue;

    createApp({
      data() {
        return {
          error: false,
          newTask: "",
          tasks: [
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato",
            "Fare il pieno"
          ]
        };
      }
    }).mount("#App");
    


//* - done, un booleano (true/false) che indica se il task è stato fatto oppure no
    //todo Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.



//! MILESTONE 2
//todo Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.




//! MILESTONE 3
//todo Predisporre un campo di input testuale


// todo Predisporre un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.



    const grid = document.querySelector("#grid-container");

    const button = document.getElementById("button");

    const select = document.getElementById("diff-select");

    select.addEventListener("change", function() {

        let difficult = select.value;

        switch(difficult) {

            case "easy":
                console.log("Difficoltà selezionata: Easy");
                break;
            case "medium":
                console.log("Difficoltà selezionata: Medium");
                break;
            case "expert":
                console.log("Difficoltà selezionata: Expert");
                break;
            default:
                console.log("Nessuna difficoltà selezionata");
                break;
        }
    
        button.addEventListener("click", function() {
            grid.innerHTML = "";
            if (difficult === "easy")

            for (let i = 0; i < 100; i++) {
    
                const myElement = document.createElement("div");
    
                myElement.classList.add("square");
    
                myElement.innerHTML = i + 1;
    
                grid.append(myElement);
    
            } else if (difficult === "medium")

            for (let i = 0; i < 81; i++) {
    
                const myElement = document.createElement("div");
    
                myElement.classList.add("square-medium");
    
                myElement.innerHTML = i + 1;
    
                grid.append(myElement);
    
            } else if (difficult === "expert")

            for (let i = 0; i < 49; i++) {
    
                const myElement = document.createElement("div");
    
                myElement.classList.add("square-expert");
    
                myElement.innerHTML = i + 1;
    
                grid.append(myElement);
    
        };
    });
});

    
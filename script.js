let cart = []
let amountOfArr = 3;

function init(){
    renderLaCarta();
}

function renderLaCarta(){
    let laCartaRef = document.getElementById("la-carta");
    laCartaRef.innerHTML = "";
    let arrCount = 0;

    for (let indexLaCarta = 0; indexLaCarta < amountOfArr; indexLaCarta++) {
        let categoryRef = setCategory(arrCount);
        let arrRef = setArr(arrCount);
        arrCount++;
        laCartaRef.innerHTML += templateLaCarta(indexLaCarta, categoryRef);
        renderIn(arrRef);
    }
}

function renderIn(arrRef){
    let inRef = document.getElementById("la-carta");

    for (let indexIn = 0; indexIn < arrRef.length; indexIn++) {
        inRef.innerHTML += templateContainerIn(indexIn, arrRef);
    }
}

function setCategory(arrCount){
    switch (arrCount) {
        case 0:
            return "Hauptgerichte";
        case 1:
            return "Beilagen";
        case 2:
            return "Salate";
    }
}

function setArr(arrCount){
    switch (arrCount) {
        case 0:
            return mainCourse;
        case 1:
            return sides;
        case 2:
            return salads;
    }
}
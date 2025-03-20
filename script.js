let cart = [];
let cartRegister = [];
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
        laCartaRef.innerHTML += templateLaCarta(indexLaCarta, categoryRef);
        renderIn(arrRef, arrCount);      
        arrCount++;
    }
}

function renderIn(arrRef, arrCount){
    let inRef = document.getElementById("la-carta");

    for (let indexIn = 0; indexIn < arrRef.length; indexIn++) {
        inRef.innerHTML += templateContainerIn(indexIn, arrRef, arrCount);
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
        default:
            console.log('!missing array!');
            break
    }
}

function addToCart(indexIn, arrCount){
    let arrRef = setArr(arrCount);
    pushToCart(indexIn, arrRef);
}

function pushToCart(indexIn, arrRef) {
    cart.push(arrRef[indexIn]);

    let objToCheck = arrRef[indexIn].name;
    console.log(objToCheck);
    checkRegister(objToCheck);


    renderCart(indexIn, arrRef);
}



function renderCart(indexIn, arrRef) {
    let cartContainerRef = document.getElementById('cart');
    cartContainerRef.innerHTML = "";
    let dishName = arrRef[indexIn].name;
    console.log(dishName);
    let dishAmount = cart.filter(dish => dish.name == dishName);
    console.log(dishAmount);
    dishAmount = dishAmount.length;
    

    for (let indexCart = 0; indexCart < cartRegister.length; indexCart++) {
        cartContainerRef.innerHTML += templateCart(indexCart, dishAmount);
    }
}

function checkRegister(objToCheck) {
    if (!cartRegister.find(dish => dish == objToCheck) ) {
        cartRegister.push(objToCheck);
    }
}


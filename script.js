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
    pushOrIncreaseAmount(indexIn, arrRef);
}

function pushOrIncreaseAmount(indexIn, arrRef){
    let objToCheck = arrRef[indexIn].name;
    console.log(objToCheck);

    if (cart.find(x => x.name == objToCheck)) {
        let indexCart = cart.findIndex(dish => dish.name === objToCheck);
        increaseAmount(indexCart, objToCheck);
    } else {
        cart.push(arrRef[indexIn]);
        renderCart(indexIn, arrRef);
    }
}

function increaseAmount(indexCart, obj){
    let amountRef = document.getElementById(`cart-item${indexCart}-amount`);
    let amountValueRef = amountRef.innerHTML;
    amountRef.innerHTML = parseInt(amountValueRef) + 1;
}

function renderCart(indexIn, arrRef) {
    let cartContainerRef = document.getElementById('cart');
    cartContainerRef.innerHTML = "";

    for (let indexCart = 0; indexCart < cart.length; indexCart++) {
        cartContainerRef.innerHTML += templateCart(indexCart);

    }
}



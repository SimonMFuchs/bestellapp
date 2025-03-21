let cart = [];
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
    let objNameToCheck = arrRef[indexIn].name;
    
    if (!cart.find(dish => dish.name == objNameToCheck) ) {
        cart.push(arrRef[indexIn]);
    } else {
        increaseAmount(objNameToCheck);
    }

    renderCart();
}

function renderCart() {
    let cartContainerRef = document.getElementById('cart');
    cartContainerRef.innerHTML = ""

    for (let indexCart = 0; indexCart < cart.length; indexCart++) {
        cartContainerRef.innerHTML += templateCart(indexCart);
    }
}

function modifyPlusCart(objNameToCheck) {
    increaseAmount(objNameToCheck);
    renderCart();
}

function modifyMinusCart(objNameToCheck) {
    reduceAmount(objNameToCheck);
    renderCart();
}

const increaseAmount = (objNameToCheck) => {
    const objToModify = cart.find(obj => obj.name === objNameToCheck);

    if (objToModify) {
        objToModify.amount++;
    }
};

const reduceAmount = (objNameToCheck) => {
    const objToModify = cart.find(obj => obj.name === objNameToCheck);

    if (objToModify && objToModify.amount > 1) {
        objToModify.amount--;
    } else {
        const indexObj = cart.indexOf(objToModify);
        cart.splice(indexObj, 1);
    }
};

const deleteFromCart = (objNameToCheck) => {
    const objToModify = cart.find(obj => obj.name === objNameToCheck);
    const indexObj = cart.indexOf(objToModify);
    objToModify.amount = 1;
    cart.splice(indexObj, 1);
    renderCart();
};






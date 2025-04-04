let cart = [];
let amountOfArr = 3;
let sumTemp = 0;

function init() {
  renderLaCarta();
  cartButtonPrice();
}

function renderLaCarta() {
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

function renderIn(arrRef, arrCount) {
  let inRef = document.getElementById("la-carta");

  for (let indexIn = 0; indexIn < arrRef.length; indexIn++) {
    inRef.innerHTML += templateContainerIn(indexIn, arrRef, arrCount);
  }
}

function setCategory(arrCount) {
  switch (arrCount) {
    case 0:
      return "Hauptgerichte";
    case 1:
      return "Beilagen";
    case 2:
      return "Salate";
  }
}

function setArr(arrCount) {
  switch (arrCount) {
    case 0:
      return mainCourse;
    case 1:
      return sides;
    case 2:
      return salads;
    default:
      console.log("!missing array!");
      break;
  }
}

function addToCart(indexIn, arrCount) {
  let arrRef = setArr(arrCount);
  let objNameToCheck = arrRef[indexIn].name;

  if (!cart.find((dish) => dish.name == objNameToCheck)) {
    cart.push(arrRef[indexIn]);
  } else {
    increaseAmount(objNameToCheck);
  }

  renderCart();
  cartButtonPrice();
}

function renderCart() {
  let cartContainerRef = document.getElementById("cart");
  cartContainerRef.innerHTML = "";

  for (let indexCart = 0; indexCart < cart.length; indexCart++) {
    cartContainerRef.innerHTML += templateCart(indexCart);
  }

  conditionCartBill();
}

function modifyCart(objNameToCheck, operation) {
  switch (operation) {
    case 0:
      increaseAmount(objNameToCheck);
      break;

    case 1:
      reduceAmount(objNameToCheck);
      break;
  }
  renderCart();
  cartButtonPrice();
}

const increaseAmount = (objNameToCheck) => {
  const objToModify = cart.find((obj) => obj.name === objNameToCheck);

  if (objToModify) {
    objToModify.amount++;
  }
};

const reduceAmount = (objNameToCheck) => {
  const objToModify = cart.find((obj) => obj.name === objNameToCheck);

  if (objToModify && objToModify.amount > 1) {
    objToModify.amount--;
  } else {
    const indexObj = cart.indexOf(objToModify);
    cart.splice(indexObj, 1);
  }
};

const deleteFromCart = (objNameToCheck) => {
  const objToModify = cart.find((obj) => obj.name === objNameToCheck);
  const indexObj = cart.indexOf(objToModify);
  objToModify.amount = 1;
  cart.splice(indexObj, 1);
  calcCartBill();
  renderCart();
  conditionCartBill();
  cartButtonPrice();
};

function renderCartBill() {
  let cartBillRef = document.getElementById("cart-bill");
  cartBillRef.innerHTML = "";
  calcCartBill();
  cartBillRef.innerHTML = templateCartBill(sumTemp);
}

function calcCartBill() {
  sumTemp = 0;

  for (let indexBill = 0; indexBill < cart.length; indexBill++) {
    const amount = cart[indexBill].amount;
    const price = cart[indexBill].price;
    sumTemp += amount * price;
  }
}

function conditionCartBill() {
  if (cart.length > 0) {
    renderCartBill();
  } else {
    document.getElementById("cart-bill").innerHTML = "";
    bagGroundEmptyCart();
  }
}

function openCart() {
  document.getElementById("main-column-right-id").classList.add("cart-overlay");
  document.getElementById("main-column-right-id").classList.remove("main-column-right");
  document.getElementById("cart-warpper-id").classList.remove("cart-wrapper");
  document.getElementById("cart-warpper-id").classList.add("cart-wrapper-overlay");
  document.getElementById("cart-btn").classList.add("d-none");
}

function closeCart() {
  document.getElementById("main-column-right-id").classList.remove("cart-overlay");
  document.getElementById("main-column-right-id").classList.add("main-column-right");
  document.getElementById("cart-warpper-id").classList.add("cart-wrapper");
  document.getElementById("cart-warpper-id").classList.remove("cart-wrapper-overlay");
  document.getElementById("cart-btn").classList.remove("d-none");
}

function cartButtonPrice() {
  let sumFinal = sumTemp;

  if (sumFinal > 0) {
    sumFinal = sumFinal + 5;
  }

  document.getElementById("cart-btn").innerHTML = templateCartButtonPrice(sumFinal);
}

function orderTest() {
  document.getElementById("order-overlay-id").classList.remove("d-none");

  for (let indexCart = 0; 0 < cart.length; ) {
    deleteFromCart(cart[indexCart].name);
  }
}

function closeOrderOverlay() {
  document.getElementById("order-overlay-id").classList.add("d-none");
}

function bagGroundEmptyCart() {
  document.getElementById("cart").innerHTML = templateBagGroundEmptyCart();
}
function templateLaCarta(indexLaCarta, categoryRef) {
  return /*html*/ `
        <div id="container-out${indexLaCarta}">
            <div class="category-image${indexLaCarta} general-margin-height" alt="Bild der ${categoryRef}"></div>
            <h2>${categoryRef}</h2>
            <div id="container-in${indexLaCarta}"></div>
        </div>
    `;
}

function templateContainerIn(indexIn, arrRef, arrCount) {
  return /*html*/ `
        <div id="dish-in${indexIn}" class="dish-in-container general-margin-height" onclick="addToCart(${indexIn}, ${arrCount})">
            <div class="dish-info-container">            
                <h3>${arrRef[indexIn].name}</h3>
                <p>${arrRef[indexIn].description}</p>
                <p><b>${arrRef[indexIn].price.toFixed(2)}€</b></p>
            </div>
            <button class="add-btn">+</button>
        </div> 
    `;
}

// console.log(cart[0].name);

function templateCart(indexCart) {
  return /*html*/ `
        <div id="cart-item${indexCart}" class="cart-item-container">
            <h3>${cart[indexCart].name}</h3>
            <div>
                <button class="minus-btn" onclick="modifyMinusCart('${cart[indexCart].name}')">-</button>
                <span  id="cart-item${indexCart}-amount">${cart[indexCart].amount}</span>
                <button class="plus-btn" onclick="modifyPlusCart('${cart[indexCart].name}')">+</button>
                <span id="cart-item${indexCart}-price"> ${(cart[indexCart].amount*cart[indexCart].price).toFixed(2)} €</span>
                <button onclick="deleteFromCart('${cart[indexCart].name}')">🗑️</button>
            </div>
        </div>
    `;
}

function templateCartBill(sumTemp){
    return /*html*/`
        <p><span>Zwischensumme</span><span>${sumTemp.toFixed(2)}€</span></p>
        <p><span>Lieferkosten</span><span>5.00€</span></p>
        <p><span><b>Gesamt</b></span><span>${(sumTemp + 5).toFixed(2)}€</span></p>
    `
}

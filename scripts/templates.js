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
                <p><b>${arrRef[indexIn].price.regular.toFixed(2)}€</b></p>
            </div>
            <button class="add-btn">+</button>
        </div> 
    `;
}

// console.log(cart[0].name);

function templateCart(indexCart) {
  return /*html*/ `
        <div id="cart-item${indexCart}">
            <h3>${cart[indexCart].name}</h3>
            <div>
                <button class="minus-btn" onclick="">-</button>
                <span  id="cart-item${indexCart}-amount">1</span>
                <button class="plus-btn" onclick="">+</button>
                <span id="cart-item${indexCart}-price"> ${cart[indexCart].price.regular} €</span>
            </div>
        </div>
    `;
}

function templateLaCarta(indexLaCarta, categoryRef) {
    return /*html*/`
        <div id="container-out${indexLaCarta}">
            <div class="category-image${indexLaCarta} general-margin-height" alt="Bild der ${categoryRef}"></div>
            <h2>${categoryRef}</h2>
            <div id="container-in${indexLaCarta}"></div>
        </div>
    `
}

function templateContainerIn(indexIn, arrRef){
    return /*html*/`
        <div id="dish-in${indexIn}" class="dish-in-container general-margin-height">
            <div class="dish-info-container">            
                <h3>${arrRef[indexIn].name}</h3>
                <p>${arrRef[indexIn].description}</p>
                <p><b>${arrRef[indexIn].price.regular.toFixed(2)}€</b></p>
            </div>
            <button onclick="addToCart(${indexIn})" class="add-btn">+</button>
        </div> 
    `
}

console.log(mainCourse[0].description);

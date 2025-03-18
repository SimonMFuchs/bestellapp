function templateLaCarta(indexLaCarta, categoryRef) {
    return /*html*/`
        <div id="container-out${indexLaCarta}">
            <div class="category-image${indexLaCarta}" alt="Bild der ${categoryRef}"></div>
            <h2>${categoryRef}</h2>
            <div id="container-in${indexLaCarta}"></div>
        </div>
    `
}

function templateContainerIn(indexIn, arrRef){
    return /*html*/`
        <div id="dish-in${indexIn}">
            <p>${arrRef[indexIn].name}</p>
        </div>

    `
}


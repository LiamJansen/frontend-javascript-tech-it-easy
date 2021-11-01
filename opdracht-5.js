// 5A

function displayItemName(itemObject) {
    itemNameContent = itemObject.brand + " " + itemObject.type + " - " + itemObject.name;
    const displayItemNameOnPage = document.createElement("h3");
    displayItemNameOnPage.textContent = itemNameContent;

    mainBody.appendChild(displayItemNameOnPage);
}

// 5B

function displayItemPrice(itemObject) {
    const itemPriceContent = "€" + itemObject.price + ",-";
    const displayItemPriceOnPage = document.createElement("h3");
    displayItemPriceOnPage.textContent = itemPriceContent;

    mainBody.appendChild(displayItemPriceOnPage);
}

// 5C

function displayItemScreenSize(itemObject) {
    let availableSizesConverted = [];
    for(let i = 0; i < itemObject.availableSizes.length; i++) {
        availableSizesConverted.push(itemObject.availableSizes[i] + " inch (" + (Math.round(itemObject.availableSizes[i] * 2.54)) + " cm)");
    }

    const itemScreenSizes = document.createElement("h3");
    for (let i = 0; i < availableSizesConverted.length; i++) {
        if (i === availableSizesConverted.length -1) {
            itemScreenSizes.textContent += availableSizesConverted[i];
        } else {
            itemScreenSizes.textContent += availableSizesConverted[i] + " | ";
        }
        mainBody.appendChild(itemScreenSizes);
    }
    return availableSizesConverted;
}


// 5D

// displayItemName(inventory[0]);
// displayItemPrice(inventory[0]);
// displayItemScreenSize(inventory[0]);

// 5E

function tv_generator(arrayOfTVs) {
    const TVs = arrayOfTVs.map((TV) => {
        displayItemName(TV);
        displayItemPrice(TV);
        displayItemScreenSize(TV);
        mainBody.appendChild(document.createElement("br"));
    })
    return TVs;
}

tv_generator(inventory);
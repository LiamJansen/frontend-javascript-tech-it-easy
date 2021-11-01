// 1A

const typeOfTVs = inventory.map((typeOfTV) => {
    return typeOfTV.type;
})

// console.log(typeOfTVs);

// 1B

const soldOutTVs = inventory.filter((soldOutTV) => {
    if(soldOutTV.sold === soldOutTV.originalStock) {
        return soldOutTV
    }
})

// console.log(soldOutTVs);

// 1C

const ambiLightTVs = inventory.filter((ambiLightTV) => {
    return ambiLightTV.options.ambiLight === true;
})

// console.log(ambiLightTVs);

// 1D

const sortingPriceLowToHigh = inventory.sort((currentPrice, previousPrice) => currentPrice.price - previousPrice.price);

// console.log(sortingPriceLowToHigh);
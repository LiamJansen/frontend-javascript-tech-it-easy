// TV modellen met AmbiLight weergeven

function showModelsWithAmbilight(arrayOfItems) {
    const ambiLightTVs = arrayOfItems.filter((ambiLightTV) => {
        return ambiLightTV.options.ambiLight === true;
    })
    console.log(ambiLightTVs);
}

// TV modellen die uitverkocht zijn

function showItemsThatAreSoldOut(arrayOfItems) {
    const soldOutTVs = arrayOfItems.filter((soldOutTV) => {
        if(soldOutTV.sold === soldOutTV.originalStock) {
            return soldOutTV
        }
    })
    console.log(soldOutTVs);
}

/// TV modellen sorteren per prijs

function sortItemsLowToHigh(arrayOfItems) {
    const sortingPriceLowToHigh = arrayOfItems.sort((currentPrice, previousPrice) => currentPrice.price - previousPrice.price);
    console.log(sortingPriceLowToHigh);
}
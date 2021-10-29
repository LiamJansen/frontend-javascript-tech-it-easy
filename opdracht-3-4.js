// 3A

const brandsOfItems = inventory.map((brandOfItem) => {
    return brandOfItem.brand;
})

// 4B

function showAllBrands(arrayOfObjectsWithBrands) {
    const brandsOfItems = arrayOfObjectsWithBrands.map((brandOfItem) => {
        return brandOfItem.brand;
    })
    return brandsOfItems;
}

const allBrands = document.createElement("h3");
allBrands.textContent = "The brands we work with: " + showAllBrands(inventory);

mainBody.appendChild(allBrands);
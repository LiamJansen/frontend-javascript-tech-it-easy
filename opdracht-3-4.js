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

const allBrands = document.createElement("ul");
allBrands.setAttribute("id", "brandsList")
mainBody.appendChild(allBrands);

for (let i = 0; i < brandsOfItems.length; i++) {
    allBrandsList = document.createElement("li");
    allBrandsList.textContent = brandsOfItems[i];
    allBrands.append(allBrandsList);
}

console.log(typeof(showAllBrands(inventory)));
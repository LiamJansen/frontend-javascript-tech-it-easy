// 2A

function amountOfSoldStock(arrayWithItemInformation) {
    let totalSold = 0;
    const soldStock = arrayWithItemInformation.map((soldTV) => {
        return soldTV.sold;
    })
    for (let i = 0; i < soldStock.length; i++) {
        totalSold += soldStock[i];
    }
    return totalSold;
}

// 2B

const mainBody = document.getElementById("mainBodyOfContent");

const showTotalStockSold = document.createElement("h3");
showTotalStockSold.setAttribute("class", "itemsSold")
showTotalStockSold.textContent = "Amount of stock sold: " + amountOfSoldStock(inventory);

mainBody.appendChild(showTotalStockSold);

// 2C

function amountOfBoughtStock(arrayWithItemInformation) {
    let totalBought = 0;
    const boughtStock = arrayWithItemInformation.map((soldTV) => {
        return soldTV.originalStock;
    })
    for (let i = 0; i < boughtStock.length; i++) {
        totalBought += boughtStock[i];
    }
    return totalBought;
}

// 2D

const showTotalStockBought = document.createElement("h3");
showTotalStockBought.setAttribute("class", "itemsBought")
showTotalStockBought.textContent = "Amount of stock bought: " + amountOfBoughtStock(inventory);

mainBody.appendChild(showTotalStockBought);

// 2E

let stockToSell = amountOfBoughtStock(inventory) - amountOfSoldStock(inventory);

const showTotalStockToSell = document.createElement("h3");
showTotalStockToSell.setAttribute("class", "itemsToSell")
showTotalStockToSell.textContent = "Amount of stock to sell: " + stockToSell;

mainBody.appendChild(showTotalStockToSell);
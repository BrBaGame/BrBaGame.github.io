document.getElementById("balance").innerHTML = `€0`

if (localStorage.getItem("balance")){
    document.getElementById("balance").innerHTML = `€${parseFloat(localStorage.getItem("balance")).toFixed(2).toString().replace(".", ",")}`
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("inventory")){
        inventory = JSON.parse(localStorage.getItem("inventory"))

        var added = []

        inventory.forEach((item) => {
            var itemName = item.replace("_", " ").toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

            if (!added.includes(item)){
                document.getElementById("inventory").innerHTML += `
                <div class="inventory-item">
                    <img src="img/item/${item}.png">
                    <h3>${itemName} (x${inventory.filter(x => x == item).length})</h3>
                </div>`
            }

            added.push(item)
        })
    } else {
        inventory.innerHTML = "<p>Leeg.</p>"
    }
})
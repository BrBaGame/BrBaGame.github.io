const elBtn = document.getElementById("shop-btn")

function buyItem(id, price){
    var balance = localStorage.getItem("balance") || 0

    if (balance >= price){
        var inventory = localStorage.getItem("inventory")

        if (inventory){
            inventory = JSON.parse(inventory)
        } else {
            inventory = []
        }

        inventory.push(id)
        
        localStorage.setItem("inventory", JSON.stringify(inventory))

        balance -= price
        localStorage.setItem("balance", Math.round(balance * 100) / 100)

        updateBalance()
    } else {
        var oldText = elBtn.innerHTML
        elBtn.innerHTML = "Niet genoeg geld"

        setTimeout(() => {
            elBtn.innerHTML = oldText
        }, 3000)
    }
}

function popoutHamburger(){
    document.querySelector(".hamburger").classList.toggle('is-active')

    var popout = document.querySelector(".hamburger-popout")

    if (popout.style.display == "none"){
        popout.style.display = "block";
    } else {
        popout.style.display = "none";
    }
}

function updateBalance(){
    document.getElementById("balance").innerHTML = `€${parseFloat(localStorage.getItem("balance") || 0).toFixed(2).toString().replace('.', ',')}`
}

document.addEventListener("DOMContentLoaded", () => {
    updateBalance()
})
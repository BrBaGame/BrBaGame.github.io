function popoutHamburger(){
    document.querySelector(".hamburger").classList.toggle('is-active')

    var popout = document.querySelector(".hamburger-popout")

    if (popout.style.display == "none"){
        popout.style.display = "block";
    } else {
        popout.style.display = "none";
    }
}

var balance = 0;

if (localStorage.getItem("balance")){
    balance = parseFloat(localStorage.getItem("balance")).toFixed(2).toString().replace(".", ",")
}

document.querySelector(".navbar").innerHTML = `
<a href="index.html"><h1 class="logo">Methshop</h1></a>
<a href="balance.html" class="balance">€${balance.toString().replace('.', ',')}</a>
<button class="hamburger hamburger--squeeze" onclick="popoutHamburger()" type="button">
    <span class="hamburger-box">
        <span class="hamburger-inner"></span>
    </span>
</button>
`

document.querySelector(".hamburger-items").innerHTML = `
<li><a href="index.html"><h1>Home</h1></a></li>
<li><a href="shop.html"><h1>Shop</h1></a></li>
<li><a href="about.html"><h1>About</h1></a></li>
<li><a href="help.html"><h1>Help</h1></a></li>
`
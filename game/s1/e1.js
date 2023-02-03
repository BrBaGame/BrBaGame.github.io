const elGame = document.getElementById("game")
const elIntro = document.getElementById("intro-video")
const elImage = document.getElementById("image")
const elCharacter = document.getElementById("character")
const elMessage = document.getElementById("message")
const elNextBtn = document.getElementById("next-btn")
const elPause = document.getElementById("pause")
const elMusicBtn = document.getElementById("music-btn")
const sndTheme = getSound("theme", 0.5)
const elToasts = document.getElementById("toasts")

const gameplay2_player = document.getElementById("gameplay-2-player")

var gameplay2 = false
var gameplay2_meth_list = []
var gameplay2_enemy_list = []
var gameplay2_reward = 0
var gameplay2_meth_count = 0

const gameplay3_turn = document.getElementById("gameplay-3-turn")
const gameplay3_options = document.getElementById("gameplay-3-options")

function toast(text, element, bad=false){
    var id = 0
    var loop = true

    while (loop){
        if (document.getElementById(`toast-${id}`)){
            id++
        } else {
            loop = false
        }
    }

    var rect = element.getBoundingClientRect()

    elToasts.innerHTML += `<h2 style="top: ${rect.top}px; left: ${rect.left}px;" id="toast-${id}" class="toast">${text}</h2>`
    if (bad) document.getElementById(`toast-${id}`).style.color = "#d83535"

    setTimeout(() => {
        document.getElementById(`toast-${id}`).remove()
    }, 2000)
}

function getSound(id, volume=1){
    var sound = document.getElementById(`sound-${id}`).cloneNode()
    sound.volume = volume
    return sound
}

function playSound(id, volume=1){
    getSound(id, volume).play()
}

function showDialog(index){   
    var dialog = dialogs[index]

    showDialogLegacy(dialog)
}

function showDialogLegacy(dialog){
    currentDialog = dialog

    elNextBtn.style.display = "none"
    elNextBtn.removeAttribute("href")

    elImage.src = `img/${dialog.image}.png`
    elCharacter.innerHTML = dialog.character
    elMessage.innerHTML = ""

    for (var i = 0; i < dialog.message.length; i++) {
        ((i) => {
            setTimeout(() => {
                elMessage.innerHTML += dialog.message.charAt(i)
                playSound("talking")
            }, i * 50)
        })(i)
    }

    setTimeout(() => { 
        if (dialog.buttonText){
            elNextBtn.innerHTML = dialog.buttonText
        } else {
            elNextBtn.innerHTML = "Volgende"
        }

        elNextBtn.style.display = "block"
        elNextBtn.href = "javascript:" + dialog.next
    }, dialog.message.length * 50)
}

function gameplay(id){
    elGame.style.display = "none"
    var container = document.getElementById(`gameplay-${id}`)
    container.style.display = "block"
}

function finishGameplay(id){
    elGame.style.display = "block"
    var container = document.getElementById(`gameplay-${id}`)
    container.style.display = "none"
}

function victoryGameplayNext(id){
    switch (id){
        case 0:
            showDialog(51)
            break
        case 1:
            showDialog(56)
            break
        case 2:
            showDialog(57)
            break
        case 3:
            showDialog(69)
            break
        default:
            break
    }

    document.getElementById("gameplay-victory").style.display = "none"
    elGame.style.display = "block"
}

function victoryGameplay(id, balance){
    elToasts.innerHTML = ""

    document.getElementById(`gameplay-${id}`).style.display = "none"
    document.getElementById("gameplay-victory").style.display = "block"
    document.getElementById("gameplay-victory-bg").src = `img/gameplay${id}/victory.png`
    document.getElementById("gameplay-victory-balance").innerHTML = `€${balance.toString().replace('.', ',')}`
    document.getElementById("gameplay-victory-next").href = `javascript:victoryGameplayNext(${id})`

    localStorage.setItem("balance", parseInt(localStorage.getItem("balance")) + parseInt(balance))

    toggle_music_setting()
    
    var sound = getSound("victory")
    sound.play()
    sound.addEventListener("ended", () => {
        toggle_music_setting()
    })
}

function gameplay0_finish(){
    if (document.getElementById("gameplay-0-volumetric_flask").classList.contains("active")){
        showDialogLegacy({
            image: "gameplay0/wrong_flask",
            character: "Walter",
            message: "Nee, dit is een maatkolf. In zo'n ding hoor je niet te koken.",
            next: "gameplay(0)",
            buttonText: "Opnieuw"
        })

        finishGameplay(0)

        document.getElementById("gameplay-0-balance").innerHTML = "50"
    } else if (document.getElementById("gameplay-0-boiling_flask").classList.contains("active")){
        victoryGameplay(0, document.getElementById("gameplay-0-balance").innerHTML)
    }
}

function gameplay0_selectItem(item){
    document.getElementById("gameplay-0-volumetric_flask").classList.remove("active")
    document.getElementById("gameplay-0-boiling_flask").classList.remove("active")

    var item = document.getElementById(`gameplay-0-${item}`)
    item.classList.add("active")
}

function gameplay1_finish(){
    showDialog(52)
    document.getElementById("gameplay-1").style.display = "none"
    elGame.style.display = "block"
}

function gameplay1_kick(){
    document.getElementById("gameplay-1-kick").href = "javascript:gameplay1_finish()"
    document.getElementById("gameplay-1-img").src = "img/gameplay1/kicked.png"
}

function skipIntro(){
    elIntro.pause()
    document.getElementById("intro").style.display = "none"

    elGame.style.display = "block"
    showDialog(0)

    if (localStorage.getItem("music") == "off"){
        toggle_music_setting()
    } else {
        sndTheme.play()
    }
}

function start(){
    document.getElementById("start").style.display = "none"
    document.getElementById("intro").style.display = "block"

    elIntro.play()
    elIntro.addEventListener("ended", () => {
        skipIntro()
    })
}

function leave(){
    location.reload()
}
    
function pause(){
    elPause.style.display = "block"
    document.getElementById("pause-balance").innerHTML = `€${parseFloat(localStorage.getItem("balance")).toFixed(2).toString().replace(".", ",")}`
}

function unpause(){
    elPause.style.display = "none"
}

function toggle_music_setting(){
    if (elMusicBtn.innerHTML == "Aan"){
        sndTheme.pause()
        elMusicBtn.innerHTML = "Uit"
        localStorage.setItem("music", "off")
    } else {
        sndTheme.play()
        elMusicBtn.innerHTML = "Aan"
        localStorage.setItem("music", "on")
    }
}

function randint(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameplay2_start(){
    gameplay2_player.style.left = ((window.innerWidth / 2) - 75).toString() + "px"
}

function gameplay2_spawnMeth(index){
    var meth = document.createElement("img")
    meth.src = "img/gameplay2/meth.png"

    left = randint(0, window.innerWidth - 150)

    meth.style = `width: 150px; position: absolute; top: 0; left: ${left}px; z-index: 9999;`

    document.getElementById("gameplay-2-meth").appendChild(meth)

    gameplay2_meth_list.push(meth)
    gameplay2_meth_count++
}

function gameplay2_spawnEnemy(index){
    var enemy = document.createElement("img")
    enemy.src = "img/gameplay2/enemy.png"

    left = randint(0, window.innerWidth - 150)

    enemy.style = `width: 150px; position: absolute; top: 0; left: ${left}px; z-index: 9999;`

    document.getElementById("gameplay-2-meth").appendChild(enemy)

    gameplay2_enemy_list.push(enemy)
}

var colliding = (function(){
    function getPositions(elem){
        var pos = elem.getBoundingClientRect()
        return [[pos.left, pos.right], [pos.top, pos.bottom]]
    }

    function comparePositions(p1, p2){
        var r1, r2
        if (p1[0] < p2[0]){
            r1 = p1
            r2 = p2
        } else {
            r1 = p2
            r2 = p1
        }
        return r1[1] > r2[0] || r1[0] === r2[0]
    }

    return function(a, b){
        var pos1 = getPositions(a)
        var pos2 = getPositions(b)
        return comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1])
    }
})()

function gameplay2_loop(){
    setInterval(() => {
        if (Math.random() < 0.5){
            gameplay2_spawnMeth()
        } else {
            gameplay2_spawnEnemy()
        }

        if (!gameplay2) clearInterval()
    }, 1000)

    setTimeout(() => {
        gameplay2 = false
        victoryGameplay(2, gameplay2_reward)
        gameplay2_meth_count = 0
        gameplay2_meth_list = []
        gameplay2_enemy_list = []
    }, 40000)

    setInterval(() => {
        if (gameplay2){
            gameplay2_meth_list.forEach((meth) => {
                var newTop = parseInt(meth.style.top.replace("/px/", "")) + 30
                meth.style.top = newTop.toString() + "px"
    
                left = parseInt(meth.style.left.replace("/px/", ""))
                plrLeft = parseInt(gameplay2_player.style.left.replace("/px/", ""))
    
                if (colliding(meth, gameplay2_player)){
                    playSound("collect")

                    toast("+€105", gameplay2_player)

                    meth.remove()
                    gameplay2_reward += 105
                }
            })
    
            gameplay2_enemy_list.forEach((enemy) => {
                var newTop = parseInt(enemy.style.top.replace("/px/", "")) + 25
                enemy.style.top = newTop.toString() + "px"
    
                left = parseInt(enemy.style.left.replace("/px/", ""))
                plrLeft = parseInt(gameplay2_player.style.left.replace("/px/", ""))
    
                if (colliding(enemy, gameplay2_player)){
                    playSound("fail")
                    toast("-€200", gameplay2_player, true)
                    enemy.remove()
                    gameplay2_reward -= 200
                    if (gameplay2_reward < 0) gameplay2_reward = 0
                }
            })
    
            document.getElementById("gameplay-2-reward").innerHTML = `${parseFloat(gameplay2_reward || 0).toFixed(2).toString().replace('.', ',')}`
        } else {
            clearInterval(this)
        }
    }, 100)
}

function gameplay3_attack(){
    document.getElementById("gameplay-3-enemies").classList.toggle("selectable")
    var btn = document.getElementById("gameplay-3-attack")
    btn.innerHTML = btn.innerHTML == "Aanvallen" ? "Annuleren" : "Aanvallen"
    var btn2 = document.getElementById("gameplay-3-run")
    btn2.style.display = btn2.style.display == "none" ? "inline-block" : "none"
}

function gameplay3_get_health_count(character){
    return document.getElementById(`gameplay-3-health-${character}-count`)
}

function gameplay3_damage_character(health, character){
    var img = document.getElementById(`gameplay-3-${character}`)
    var healthCount = gameplay3_get_health_count(character)
    var healthFill = document.getElementById(`gameplay-3-health-${character}-fill`)

    playSound("fail")

    img.style.animation = "damage 0.5s linear"
    setTimeout(() => {
        img.style.animation = "none"
    }, 500)

    healthCount.innerHTML = health.toString()

    if (health == 0){
        healthFill.style.background = "none"
        healthFill.style.width = "100%"
        healthFill.style.marginLeft = "0"
        img.classList.add("dead")
    } else if (character == "krazy8" || character == "emilio") {
        healthFill.style.background = "#d83535"
        healthFill.style.width = `${health}%`
        healthFill.style.marginLeft = `${100 - health}%`
    } else {
        healthFill.style.background = "#35d835"
        healthFill.style.width = `${health}%`
        healthFill.style.marginLeft = "0"
    }
}

function gameplay3_get_next_turn(turn){
    switch (turn){
        case "Walter":
            return "Jesse"
        case "Jesse":
            return "Krazy-8"
        case "Krazy-8":
            return "Emilio"
        case "Emilio":
            return "Walter"
    }
}

function gameplay3_next_turn(turn){
    if (parseInt(gameplay3_get_health_count("krazy8").innerHTML) == 0 && parseInt(gameplay3_get_health_count("emilio").innerHTML) == 0){
        victoryGameplay(3, 2000)
    } else if (parseInt(gameplay3_get_health_count("walter").innerHTML) == 0 && parseInt(gameplay3_get_health_count("jesse").innerHTML) == 0){
        showDialog(67)
        finishGameplay(3)
    } else {
        var nextTurn = gameplay3_get_next_turn(turn)

        var turnHealth = nextTurn.toLowerCase().replace("-", "")

        if (parseInt(gameplay3_get_health_count(turnHealth).innerHTML) == 0){
            return gameplay3_next_turn(gameplay3_get_next_turn(turn))
        } else {
            gameplay3_turn.innerHTML = gameplay3_get_next_turn(turn)
            return gameplay3_get_next_turn(turn)
        }
    }
}

function gameplay3_enemy_turn(){
    gameplay3_options.style.display = "none"

    setTimeout(() => {
        var defChoices = ["walter", "jesse"]
        var choices = []

        defChoices.forEach((choice) => {
            if (!document.getElementById(`gameplay-3-${choice}`).classList.contains("dead")){
                choices.push(choice)
            }
        })

        var character = choices[Math.floor(Math.random() * choices.length)]
        var healthCount = gameplay3_get_health_count(character)
        
        var health = parseInt(healthCount.innerHTML) - randint(14, 40)
        if (health < 0) health = 0
        
        gameplay3_damage_character(health, character)

        toast(`-${100 - health}`, document.getElementById(`gameplay-3-${character}`), true)

        if (["Krazy-8", "Emilio"].includes(gameplay3_next_turn(gameplay3_turn.innerHTML))){
            gameplay3_enemy_turn()
        } else {
            gameplay3_options.style.display = "block"
        }
    }, 2000)
}

function gameplay3_attack_character(character){
    if (!document.getElementById(`gameplay-3-${character}`).classList.contains("dead")){
        var enemies = document.getElementById("gameplay-3-enemies")

        if (enemies.classList.contains("selectable")){
            var healthCount = gameplay3_get_health_count(character)

            enemies.classList.remove("selectable")

            document.getElementById("gameplay-3-attack").innerHTML = "Aanvallen"
            document.getElementById("gameplay-3-run").style.display = "inline-block"

            var health = parseInt(healthCount.innerHTML) - randint(8, 30)
            if (health < 0) health = 0

            gameplay3_damage_character(health, character)

            toast(`-${100 - health}`, document.getElementById(`gameplay-3-${character}`))

            if (["Krazy-8", "Emilio"].includes(gameplay3_next_turn(gameplay3_turn.innerHTML))){
                gameplay3_enemy_turn()
            }
        }
    }
}

function gameplay3_run(){
    showDialog(68)
    finishGameplay(3)
}

function gameplay3_start(){
    document.getElementById("gameplay-3-health-walter-count").innerHTML = "100"
    document.getElementById("gameplay-3-health-jesse-count").innerHTML = "100"
    document.getElementById("gameplay-3-health-krazy8-count").innerHTML = "100"
    document.getElementById("gameplay-3-health-emilio-count").innerHTML = "100"

    document.getElementById("gameplay-3-health-walter-fill").style = "width: 100%;"
    document.getElementById("gameplay-3-health-jesse-fill").style = "width: 100%;"
    document.getElementById("gameplay-3-health-krazy8-fill").style = "width: 100%;"
    document.getElementById("gameplay-3-health-emilio-fill").style = "width: 100%;"

    document.getElementById("gameplay-3-walter").classList.remove("dead")
    document.getElementById("gameplay-3-jesse").classList.remove("dead")
    document.getElementById("gameplay-3-krazy8").classList.remove("dead")
    document.getElementById("gameplay-3-emilio").classList.remove("dead")
}

document.body.onkeydown = (e) => {
    if (e.key == "ArrowRight"){
        var currentLeft = parseInt(gameplay2_player.style.left.replace("/px/", ""))
        if (currentLeft < document.getElementById("gameplay-2-rv").clientWidth - 160){
            gameplay2_player.style.left = (currentLeft + 15).toString() + "px"
        }
    }

    if (e.key == "ArrowLeft"){
        var currentLeft = parseInt(gameplay2_player.style.left.replace("/px/", ""))
        if (currentLeft > 10){
            gameplay2_player.style.left = (currentLeft - 15).toString() + "px"
        }
    }
}

document.body.onkeyup = (e) => {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
        if (elIntro.paused){
            elNextBtn.click()
        } else {
            skipIntro()
        }
    } else if (e.key == "Escape"){
        if (elPause.style.display == "none" && document.getElementById("start").style.display == "none"){
            pause()
        } else {
            unpause()
        }
    }
}
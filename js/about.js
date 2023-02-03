const slides = [
    `
    <div class="about-grid-item">
        <img src="img/walter_white.png" width="325px">
    </div>
    <div class="about-biography">
        <h1>Walter White</h1>
        <br>
        <p>"My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a meth empire for over a year now and using me as his chemist. Shortly after my 50th birthday, Hank came to me with a rather, shocking proposition. He asked that I use my chemistry knowledge to cook methamphetamine, which he would then sell using his connections in the drug world. Connections that he made through his career with the DEA. I was... astounded, I... I always thought that Hank was a very moral man and I was... thrown, confused, but I was also particularly vulnerable at the time, something he knew and took advantage of. I was reeling from a cancer diagnosis that was poised to bankrupt my family. Hank took me on a ride along, and showed me just how much money even a small meth operation could make. And I was weak. I didn't want my family to go into financial ruin so I agreed. Every day, I think back at that moment with regret. I quickly realized that I was in way over my head, and Hank had a partner, a man named Gustavo Fring, a businessman. Hank essentially sold me into servitude to this man, and when I tried to quit, Fring threatened my family. I didn't know where to turn. Eventually, Hank and Fring had a falling out. From what I can gather, Hank was always pushing for a greater share of the business, to which Fring flatly refused to give him, and things escalated. Fring was able to arrange, uh I guess I guess you call it a "hit" on my brother-in-law, and failed, but Hank was seriously injured, and I wound up paying his medical bills which amounted to a little over $177,000. Upon recovery, Hank was bent on revenge, working with a man named Hector Salamanca, he plotted to kill Fring, and did so. In fact, the bomb that he used was built by me, and he gave me no option in it. I have often contemplated suicide, but I'm a coward. I wanted to go to the police, but I was frightened. Hank had risen in the ranks to become the head of the Albuquerque DEA, and about that time, to keep me in line, he took my children from me. For 3 months he kept them. My wife, who up until that point, had no idea of my criminal activities, was horrified to learn what I had done, why Hank had taken our children. We were scared. I was in Hell, I hated myself for what I had brought upon my family. Recently, I tried once again to quit, to end this nightmare, and in response, he gave me this. I can't take this anymore. I live in fear every day that Hank will kill me, or worse, hurt my family. I... All I could think to do was to make this video in hope that the world will finally see this man, for what he really is."</p>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/skyler_white.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Skyler White</h1>
        <br>
        <p>"Well, my name is Skyler White, yo. My husband is Walter White, yo. Uh, huh. He told me everything."</p>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/walter_jr.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Walter Jr. White</h1>
        <br>
        <p>"Why don't you just die already?"</p>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/jesse_pinkman.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Jesse Pinkman</h1>
        <br>
        <p>"Bitch."</p>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/hank_schrader.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Hank Schrader</h1>
        <br>
        <p>"I swear to Christ, I will put you UNDER the jail!"</p>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/gus_fring.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Gus Fring</h1>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/B9RgougnhiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/saul_goodman.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Saul Goodman</h1>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wqnHtGgVAUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/mike_ehrmantraut.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Mike Ehrmantraut</h1>
        <br>
        <p>"Just shut up and let me die in peace."</p>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/badger.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Brandon "Badger" Mayhew</h1>
        <br>
        <p>"Darth Vader had responsibilities. He was responsible for the Death Star."<p>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/todd_alquist.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Todd Alquist</h1>
        <br>
        <p>"At the end of the day, it was him or us, and I chose us. And I would do it again."<p>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/tuco_salamanca.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Tuco Salamanca</h1>
        <br>
        <p>"Blue, yellow, pink. Whatever, man. Just keep bringing me that."</p>
    </div>
    `,
    `
    <div class="about-grid-item">
        <img src="img/joel.webp" width="325px">
    </div>
    <div class="about-biography">
        <h1>Joel Miller</h1>
        <br>
        <p>"Why don't you say whatever speech you've got rehearsed and get this over with."</p>
    </div>
    `
]

var slideIndex = 0

function slideLeft(){
    if (slideIndex === 0){
        slideIndex = slides.length - 1
    } else {
        slideIndex -= 1
    }

    setSlide(slideIndex)
}

function slideRight(){
    if (slideIndex === slides.length - 1){
        slideIndex = 0
    } else {
        slideIndex += 1
    }

    setSlide(slideIndex)
}

function setSlide(index){
    document.querySelector(".about-grid").innerHTML = slides[index]
}

setSlide(slideIndex)
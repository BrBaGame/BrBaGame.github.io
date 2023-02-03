const dialogs = {
    0: {
        image: "walter_teaching",
        character: "Walter",
        message: "Scheikunde. Het is de studie van wat?",
        next: "showDialog(1)"
    },
    1: {
        image: "walter_teaching",
        character: "Walter",
        message: "Iemand?",
        next: "showDialog(2)"
    },
    2: {
        image: "walter_teaching",
        character: "Walter",
        message: "Ben.",
        next: "showDialog(3)"
    },
    3: {
        image: "ben_chemicals",
        character: "Ben",
        message: "Chemicaliën.",
        next: "showDialog(4)"
    },
    4: {
        image: "walter_teaching",
        character: "Walter",
        message: "Chemicaliën! Nee!",
        next: "showDialog(5)"
    },
    5: {
        image: "walter_teaching",
        character: "Walter",
        message: "Scheikunde is technisch gezien de studie van materie, maar ik zie het liever als de studie van verandering.",
        next: "showDialog(6)"
    },
    6: {
        image: "walter_teaching",
        character: "Walter",
        message: "Denk hier eens over na.",
        next: "showDialog(7)"
    },
    7: {
        image: "walter_teaching",
        character: "Walter",
        message: "Elektronen. Ze veranderen hun energieniveau. Moleculen. Moleculen veranderen hun bindingen. Elementen. Ze combineren en veranderen in verbindingen.",
        next: "showDialog(8)"
    },
    8: {
        image: "walter_teaching",
        character: "Walter",
        message: "Nou, dat is het hele leven. Toch? Ik bedoel, het is gewoon de constante. Het is de cyclus. Het is oplossing, ontbinding, keer op keer. Het is groei, dan verval en dan transformatie.",
        next: "showDialog(9)"
    },
    9: {
        image: "walter_teaching_happy",
        character: "Walter",
        message: "Het is echt fascinerend.",
        next: "showDialog(10)"
    },
    10: {
        image: "walter_enters_party",
        character: "",
        message: "",
        next: "showDialog(11)"  
    },
    11: {
        image: "suprise",
        character: "Iedereen",
        message: "Suprise!",
        next: "showDialog(12)"
    },
    12: {
        image: "suprise",
        character: "Walter Jr",
        message: "Fijne verjaardag, pap!",
        next: "showDialog(13)"
    },
    13: {
        image: "skyler_late",
        character: "Skyler",
        message: "Jij bent zo erg laat.",
        next: "showDialog(14)"
    },
    14: {
        image: "glock_22",
        character: "Hank",
        message: "Glock 22. Het is mijn dagelijkse handbagage, oké?",
        next: "showDialog(15)"
    },
    15: {
        image: "hank_time",
        character: "Hank",
        message: "Oh shit, check kanaal 3.",
        next: "showDialog(16)"
    },
    16: {
        image: "hank_news",
        character: "Hank (op het nieuws)",
        message: "Op dat moment hebben we drie personen aangehouden en in hechtenis genomen. Ik ben er trots op te kunnen zeggen dat de uitstekende professionaliteit van mijn collega-agenten bij het districtskantoor van Albuquerque ertoe heeft geleid dat een aanzienlijke hoeveelheid methamfetamine van de straat is gehaald.",
        next: "showDialog(17)"
    },
    17: {
        image: "meth_lab_money",
        character: "",
        message: "",
        next: "showDialog(18)"
    },
    18: {
        image: "walter_money",
        character: "Walter",
        message: "Hank, hoeveel geld is dat?",
        next: "showDialog(19)"
    },
    19: {
        image: "hank_700k",
        character: "Hank",
        message: "Ongeveer 700.000. Dat is een behoorlijk goede vangst, hè?",
        next: "showDialog(20)"
    },
    20: {
        image: "walter_money",
        character: "Walter",
        message: "Wauw. Maar dat is ongewoonlijk, toch, zoveel geld?",
        next: "showDialog(21)"
    },
    21: {
        image: "hank_700k",
        character: "Hank",
        message: "Nou, het is niet het meeste dat we ooit hebben genomen.",
        next: "showDialog(22)"
    },
    22: {
        image: "hank_700k",
        character: "Hank",
        message: "Het is gemakkelijk geld tot we je pakken.",
        next: "showDialog(23)"
    },
    23: {
        image: "hank_700k",
        character: "Hank",
        message: "Walt, zeg het maar en ik neem je mee op een ritje, dan kan je zien hoe we een meth-lab neerhalen. Krijg je eens een beetje opwinding in je leven.",
        next: "showDialog(24)"
    },
    24: {
        image: "walter_money",
        character: "Walter",
        message: "Ja, ooit op een dag.",
        next: "showDialog(25)"
    },
    25: {
        image: "walter_car_wash",
        character: "",
        message: "",
        next: "showDialog(26)"
    },
    26: {
        image: "walter_drop",
        character: "",
        message: "",
        next: "showDialog(27)"
    },
    27: {
        image: "walter_dropped",
        character: "",
        message: "",
        next: "showDialog(28)"
    },
    28: {
        image: "ambulance",
        character: "",
        message: "",
        next: "showDialog(29)"
    },
    29: {
        image: "walter_ambulance",
        character: "Walter",
        message: "Dit is zo beschamend. Het gaat goed met me. Eerlijk. Het is gewoon een griepje dat rondgaat. Eerst had mijn vrouw het, toen mijn zoon en nu ik. Het is net als een verkoudheid op de borst.",
        next: "showDialog(30)"
    },
    30: {
        image: "walter_ambulance",
        character: "Walter",
        message: "Kan ook een lage bloedsuikerspiegel zijn. Eerlijk gezegd had ik vanmorgen niet het beste ontbijt. Hé, luister, kun je me een plezier doen? Kun je me ergens op een hoek afzetten?",
        next: "showDialog(31)"
    },
    31: {
        image: "walter_ambulance",
        character: "Hulpverlener",
        message: "Nee. Sorry.",
        next: "showDialog(32)"
    },
    32: {
        image: "walter_ambulance",
        character: "Walter",
        message: "Ik heb alleen niet de beste verzekering.",
        next: "showDialog(33)"
    },
    33: {
        image: "ambulance_test",
        character: "Hulpverlener",
        message: "Mr. White, rook jij?",
        next: "showDialog(34)"
    },
    34: {
        image: "ambulance_test",
        character: "Walter",
        message: "Nee. Nooit. Hoezo?",
        next: "showDialog(35)"
    },
    35: {
        image: "cancer_test",
        character: "",
        message: "",
        next: "showDialog(36)"
    },
    36: {
        image: "lung_cancer",
        character: "Walter",
        message: "Ja. Longkanker. Inoperabel.",
        next: "showDialog(37)"
    },
    37: {
        image: "cancer_doctor",
        character: "Dokter",
        message: "Het spijt me, ik moet er zeker van zijn dat u het volledig begrijpt.",
        next: "showDialog(38)"
    },
    38: {
        image: "lung_cancer",
        character: "Walter",
        message: "In het beste geval, met chemo, leef ik misschien nog een paar jaar.",
        next: "showDialog(39)"
    },
    39: {
        image: "meth_lab_houses",
        character: "",
        message: "",
        next: "showDialog(40)"
    },
    40: {
        image: "meth_lab_car",
        character: "Hank",
        message: "Het is het laatste huis aan de rechterkant. Zie je het? Niet de twee verdiepingen tellende. Die ernaast. Het soort, uh, ik weet het niet, hoe noem je dat? Groen?",
        next: "showDialog(41)"
    },
    41: {
        image: "meth_lab_car",
        character: "Walter",
        message: "Dus wat zegt je dat het een meth-lab is?",
        next: "showDialog(42)"
    },
    42: {
        image: "meth_lab_car",
        character: "Hank",
        message: "Gewoon onze verklikker. Zegt dat een gast die langs Cap'n Cook gaat zijn naam daar eer aan doet. Hij zegt dat hij altijd een scheutje chilipoeder toevoegt. Ach, jullie uitbundige Mexicanen.",
        next: "showDialog(43)"
    },
    43: {
        image: "meth_lab_dea",
        character: "",
        message: "",
        next: "showDialog(44)"
    },
    44: {
        image: "jesse_escaping",
        character: "",
        message: "",
        next: "showDialog(45)"
    },
    45: {
        image: "jesse_escaped",
        character: "",
        message: "",
        next: "showDialog(46)"
    },
    46: {
        image: "walter_pinkman",
        character: "Walter",
        message: "Pinkman?",
        next: "showDialog(47)"
    },
    47: {
        image: "walter_short_speech",
        character: "Walter",
        message: "Korte toespraak. Je bent vandaag je partner kwijtgeraakt. Wat is zijn naam? Emilio? Emilio gaat naar de gevangenis. De DEA nam al je geld, je lab. Je hebt niets. Terug naar de basis. Maar u kent het vak. En ik ken de chemie. Ik denk dat jij en ik misschien samen kunnen werken.",
        next: "showDialog(48)"
    },
    48: {
        image: "jesse_you_and_me",
        character: "Jesse",
        message: "Jij wilt crystal meth koken? Jij? Jij en, uh, en ik?",
        next: "showDialog(49)"
    },
    49: {
        image: "walter_short_speech",
        character: "Walter",
        message: "Dat klopt. Dat, of ik geef je aan.",
        next: "showDialog(50)"
    },
    50: {
        image: "walter_grabbing_stuff",
        character: "",
        message: "Pak de juiste spullen.",
        next: "gameplay(0)",
        buttonText: "Begin"
    },
    51: {
        image: "walter_angry_annoying",
        character: "",
        message: "Er is een tiener die Walter Jr aan het pesten is. Maak hem af.",
        next: "gameplay(1)",
        buttonText: "Begin"
    },
    52: {
        image: "walter_fighting",
        character: "Walter",
        message: "Wat is er aan de hand, chef? Een beetje moeite met lopen?",
        next: "showDialog(53)"
    },
    53: {
        image: "annoying_kid",
        character: "Tiener",
        message: "Ik maak je af, man!",
        next: "showDialog(54)"
    },
    54: {
        image: "walter_fighting",
        character: "Walter",
        message: "Nou, je hebt een kans. Je kunt het maar beter goed maken. Wat, wacht je op je vriendinnen? Je kunt beter gaan. Pak aan. Neem je kans. Pak aan! Kom op. Kom op.",
        next: "showDialog(55)"
    },
    55: {
        image: "annoying_kid",
        character: "Tiener",
        message: "Laten we gaan. Idioot.",
        next: "elGame.style.display = 'none'; victoryGameplay(1, 100)"
    },
    56: {
        image: "make_meth",
        character: "",
        message: "Kook meth.",
        next: "gameplay(2); gameplay2 = true; gameplay2_start(); gameplay2_loop()"
    },
    57: {
        image: "walter_sees_krazy8",
        character: "",
        message: "",
        next: "showDialog(58)"
    },
    58: {
        image: "krazy8_arrives",
        character: "",
        message: "",
        next: "showDialog(59)"
    },
    59: {
        image: "krazy8_nudist",
        character: "Krazy-8",
        message: "Hey man. Ben je een soort nudist? Dat is een steenfijne steak die je daar hebt gekookt, ese. Wat dacht je ervan om voor mij te komen werken?",
        next: "showDialog(60)"
    },
    60: {
        image: "walter_selling_krazy8",
        character: "Walter",
        message: "Ik wil het graag aan je verkopen als de prijs goed is.",
        next: "showDialog(61)"
    },
    61: {
        image: "krazy8_nudist",
        character: "Krazy-8",
        message: "Ben je hier helemaal alleen, hè?",
        next: "showDialog(62)"
    },
    62: {
        image: "krazy8_money",
        character: "",
        message: "",
        next: "showDialog(63)"
    },
    63: {
        image: "emilio_recognizes_walter",
        character: "Emilio",
        message: "Ik ken jou! Hij was erbij toen ik werd opgepakt! Hij is van de DEA!",
        next: "showDialog(64)"
    },
    64: {
        image: "walter_selling_krazy8",
        character: "Walter",
        message: "Nee.",
        next: "showDialog(65)"
    },
    65: {
        image: "jesse_run",
        character: "Jesse",
        message: "Ren, Mr. White! Ren!",
        next: "showDialog(66)"
    },
    66: {
        image: "gameplay3_intro",
        character: "",
        message: "Maak Krazy-8 en Emilio af.",
        next: "gameplay(3); gameplay3_start()"
    },
    67: {
        image: "gameplay3/defeat",
        character: "",
        message: "Ze hebben je vermoord.",
        next: "gameplay(3); gameplay3_start()",
        buttonText: "Opnieuw proberen"
    },
    68: {
        image: "gameplay3/defeat",
        character: "",
        message: "Leuk geprobeerd.",
        next: "gameplay(3); gameplay3_start()",
        buttonText: "Opnieuw proberen"
    },
    69: {
        image: "gameplay3/victory",
        character: "",
        message: "Einde van S1A01.",
        next: "leave()"
    }
}
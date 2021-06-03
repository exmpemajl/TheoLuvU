document.addEventListener('DOMContentLoaded', function (e) {
    const $SWIPER = document.querySelector(".forSwiper")
    const $key = document.querySelector(".key img")
    const cardArray = [
        {
            name: 'game1',
            img: 'images/game1.svg'
        },
        {
            name: 'game2',
            img: 'images/game2.svg'
        },
        {
            name: 'game3',
            img: 'images/game3.svg'
        },
        {
            name: 'game4',
            img: 'images/game4.svg'
        },
        {
            name: 'game5',
            img: 'images/game5.svg'
        },
        {
            name: 'game6',
            img: 'images/game6.svg'
        },
        {
            name: 'game7',
            img: 'images/game7.svg'
        },
        {
            name: 'game1',
            img: 'images/game1.svg'
        },
        {
            name: 'game2',
            img: 'images/game2.svg'
        },
        {
            name: 'game3',
            img: 'images/game3.svg'
        },
        {
            name: 'game4',
            img: 'images/game4.svg'
        },
        {
            name: 'game5',
            img: 'images/game5.svg'
        },
        {
            name: 'game6',
            img: 'images/game6.svg'
        },
        {
            name: 'game7',
            img: 'images/game7.svg'
        },
        {
            name: 'game8',
            img: 'images/game8.svg'
        },
        {
            name: 'game9',
            img: 'images/game9.svg'
        },
        {
            name: 'game8',
            img: 'images/game8.svg'
        },
        {
            name: 'game9',
            img: 'images/game9.svg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const game = document.querySelector('.game')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.svg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            game.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.svg')
            cards[optionTwoId].setAttribute('src', 'images/blank.svg')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/white.svg')
            cards[optionTwoId].setAttribute('src', 'images/white.svg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.svg')
            cards[optionTwoId].setAttribute('src', 'images/blank.svg')
        }
        cardsChosen = []
        cardsChosenId = []
        if (cardsWon.length === cardArray.length / 2) {
            game.style.display = "none";
            $SWIPER.style.display = "block";
            $key.style.display = "block"
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();

    const dino = document.querySelector(".dino");
    const cactus = document.querySelector(".cactus");
    document.addEventListener("keydown", function (event) {
        jump();
    });
    function jump() {
        if (dino.classList != "jump") {
            dino.classList.add("jump")
        }
        setTimeout(function () {
            dino.classList.remove("jump")
        }, 1000)
    }
    let isAlive = setInterval(function () {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        if (cactusLeft < 100 && cactusLeft > 0 && dinoTop >= 5) {
            $play.style.display = "block"
            cactus.style.display = "none"
        }
        else {

        }
    }, 10)
    //SWIPER
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
    const $keyClass = document.querySelector(".key");
    const $dino = document.querySelector(".dino-game");
    function isActive() {
        $keyClass.style.display = "none"
        $dino.style.display = "block"
    }
});

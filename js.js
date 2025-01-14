//משתנים
let players = [];
let current_cards;
let board_cards = [8];//הכרטיסים האמיתיים שמיוצגים עכשיו על המסך עם כל התכונות
let str = " ";
let timer;
let begin_timer = 30;
let queue_timer = 20;
let max_score = 0;
let index = 0;
let cards = [];//כרטיסים שנמצאים עכשיו על המסך (תגיות html)
let current_player = -1;
const all_cards = [
    {
        name: ["בקבוק"],
        move: 1,
        img_src: 'bottle.png'
    },
    {
        name: ["ספר", "אלבום"],
        move: 2,
        img_src: 'ספר.png'
    },
    {
        name: ["פרפר"],
        move: 2,
        img_src: 'butterfly.png'
    },
    {
        name: ["מטאטא"],
        move: 2,
        img_src: 'מטאטא.png'
    },
    {
        name: ["קנקן", "קומקום"],
        move: -2,
        img_src: 'קנקן.png'
    },
    {
        name: ["נר"],
        move: 1,
        img_src: 'candle.png'
    },
    {
        name: ["מתנה"],
        move: -3,
        img_src: 'gift.png'
    },
    {
        name: ["נעל"],
        move: -2,
        img_src: 'shoe.png'
    },
    {
        name: ["ביגלה", "בייגלה"],
        move: -3,
        img_src: 'ביגלה.png'
    },
    {
        name: ["בלון"],
        move: 4,
        img_src: 'בלון.png'
    },
    {
        name: ["ברווז", "ברוז"],
        move: 3,
        img_src: 'ברוז.png'
    },
    {
        name: ["גלידה", "גביע גלידה", "גלידה בגביע"],
        move: -2,
        img_src: 'גביע_גלידה.png'
    },
    {
        name: ["גוזל", "ציפור", "יונה", "אפרוח"],
        move: -1,
        img_src: 'גוזל.png'
    },
    {
        name: ["גזר"],
        move: -1,
        img_src: 'גזר.png'
    },
    {
        name: ["גלגל", "גלגל ים"],
        move: 3,
        img_src: 'גלגל.png'
    },
    {
        name: ["גפרור"],
        move: -3,
        img_src: 'גפרור.png'
    },
    {
        name: ["דג"],
        move: 3,
        img_src: 'דג.png'
    },
    {
        name: ["דובדבן"],
        move: -3,
        img_src: 'דובדבן.png'
    },
    {
        name: ["דובי"],
        move: 2,
        img_src: 'דובי.png'
    },
    {
        name: ["דלי", "קערה"],
        move: 1,
        img_src: 'דלי.png'
    },
    {
        name: ["חולצה", "סוודר", "סודר", "פוטר"],
        move: -2,
        img_src: 'חולצה.png'
    },
    {
        name: ["כובע", "כובע גבר"],
        move: 4,
        img_src: 'כובע_לבד.png'
    },
    {
        name: ["כוכב", "צדף", "צדפה", "כוכב ים"],
        move: 1,
        img_src: 'כוכב.png'
    },
    {
        name: ["כוס", "ספל"],
        move: 1,
        img_src: 'כוס_חרסינה.png'
    },
    {
        name: ["כסא"],
        move: 2,
        img_src: 'כסא.png'
    },
    {
        name: ["את", "כף חפירה", "כף", "מעדר"],
        move: -3,
        img_src: 'כף_חפירה.png'
    },
    {
        name: ["מטריה", "מטרייה"],
        move: -4,
        img_src: 'מטריה.png'
    },
    {
        name: ["מכחול"],
        move: 3,
        img_src: 'מכחול.png'
    },
    {
        name: ["מספריים", "מספרים"],
        move: -1,
        img_src: 'מספרים.png'
    },
    {
        name: ["מסרק"],
        move: -1,
        img_src: 'מסרק.png'
    },
    {
        name: ["מפתח"],
        move: 3,
        img_src: 'מפתח.png'
    },
    {
        name: ["משקפיים", "משקפים"],
        move: 4,
        img_src: 'משקפים.png'
    },
    {
        name: ["נוצה"],
        move: -4,
        img_src: 'נוצה.png'
    },
    {
        name: ["נורה", "מנורה", "אור"],
        move: 4,
        img_src: 'נורה.png'
    },
    {
        name: ["סוכריה", "סוכרייה"],
        move: -4,
        img_src: 'סוכריה.png'
    },
    {
        name: ["עוגן", "עגן"],
        move: 1,
        img_src: 'עוגן.png'
    },
    {
        name: ["עפיפון"],
        move: -1,
        img_src: 'עפיפון.png'
    },
    {
        name: ["עפרון", "עיפרון"],
        move: -4,
        img_src: 'עפרון.png'
    },
    {
        name: ["פטריה", "פטרייה"],
        move: -3,
        img_src: 'פטריה.png'
    },
    {
        name: ["פעמון", "פעמן"],
        move: 2,
        img_src: 'פעמון.png'
    },
    {
        name: ["שולחן", "שלחן", "שלחו"],
        move: -1,
        img_src: 'שולחן.png'
    },
    {
        name: ["שמש", "חמה"],
        move: 1,
        img_src: 'שמש.png'
    },
    {
        name: ["שעון מעורר", "שעון"],
        move: -2,
        img_src: 'שעון_מעורר.png'
    },
    {
        name: ["תוף", "תף", "תופים"],
        move: -4,
        img_src: 'תוף.png'
    },
    {
        name: ["תפוח", "תפוח ירוק"],
        move: 3,
        img_src: 'תפוח.png'
    },
    {
        name: ["בננה"],
        move: -2,
        img_src: 'banana.png'
    },
    {
        name: ["כובע שמש", "כובע"],
        move: 4,
        img_src: 'hat.png'
    },
    {
        name: ["פטיש"],
        move: -2,
        img_src: 'hummer.png'
    },
    {
        name: ["גרב", "גרביים", "גרבים"],
        move: 3,
        img_src: 'socks.png'
    }
];
window.addEventListener('load', InitPlayers);
function InitPlayers() {
    let countPlayers;
    document.getElementById("init_players").innerHTML += `<input class="input_n" id="count_players" type="number" min="2" max="5" placeholder="הכנס כמות שחקנים"> <br>`;
    document.querySelector(`.input_n`).focus();
    document.querySelector("#init_players").onsubmit = (e) => {
        e.preventDefault();
        countPlayers = document.querySelector("#count_players").value;
        document.querySelector("#init_players").innerHTML = "";
        for (let i = 0; i < countPlayers; i++) {
            InitPlayer();
        }
        document.getElementById("init_players").focus();
        document.getElementById("init_players").innerHTML += `<input type="submit" class="input_n">`;
        document.querySelector("#init_players").onsubmit = (e) => {
            e.preventDefault();
            let names = document.querySelectorAll('.player_name');
            for (let j = 0; j < countPlayers; j++)
                players.push(CreatePlayer(names[j].value));
            document.querySelector(`body`).innerHTML = `<div id="game" class="close">
                <div id="board">
                </div>
                <div id="answer"></div>
            </div>
            <div id="timer"></div>
            <script src="js.js"></script>`;
            InitBoard();
        }
    }
}
function InitPlayer() {
    document.getElementById("init_players").innerHTML += `<input class="player_name input_n" required type="text" pattern="[א-ת' -]{2,}" placeholder="הכנס שם שחקן" >`;

}
function CreatePlayer(my_name) {
    return {
        name: my_name,
        score: 0
    }
}
function InitBoard() {
    // העתקת המערך המלא למערך המשחק - העתקה עמוקה
    current_cards = [...all_cards];
    // ערבוב המערך של המשחק
    current_cards.sort(function (a, b) { return Math.round(Math.random()) - Math.round(Math.random()) });
    document.querySelector(`body`).innerHTML = `<div id="game" class="close">
    <div id="empty"></div><div id="board"></div></div><script src="js.js"></script>`;
    // בתוך לולאת פור
    for (let i = 0; i < 8; i++) {
        board_cards[i] = current_cards.pop();
        str += `<div class="img"><img src="../images/${board_cards[i].img_src}" title="${board_cards[i].name[0]}"></div>`;
    }
    document.querySelector('#board').innerHTML = str;
    document.querySelector('#board').innerHTML += '<div id="timer"></div><div id="answer"></div>';
    Timer(begin_timer);
}
function Timer(timer_length) {
    clearInterval(timer);
    let counter = timer_length;
    timer = setInterval(function () {
        let index = document.getElementById('timer');
        index.innerHTML = counter--;
        if (counter == -1) {
            clearInterval(timer);
            let cards = document.querySelectorAll(`#board .img`);
            if (timer_length == begin_timer) {
                for (card of cards)
                    card.classList.add(`closed`);
                BeginQueues();
            }
            else
                CheckCard();
        }
    }, 1000);
}
function BeginQueues() {
    current_player++;
    current_player = current_player % players.length;
    document.querySelector(`#answer`).innerHTML = `<div id="player_name">${players[current_player].name}!!!!<br/>תורך כעת לשחק!</div><input id="current_answer"type="text" placeholder="הכנס תשובה">`;
    index = Math.floor(Math.random() * 8);
    cards = document.querySelectorAll(`#board .img`);
    cards[index].classList.add(`chosen_card`);
    document.querySelector(`#current_answer`).focus();
    Timer(queue_timer);
    document.querySelector(`#current_answer`).addEventListener('change', CheckCard);
}
function contains(value) {
    for (const n of board_cards[index].name)
        if (n == value) return true;
    return false;
}
function CheckCard() {
    clearInterval(timer);
    cards[index].classList.remove(`closed`);
    if (contains(document.getElementById('current_answer').value) == true) {
        cards[index].classList.remove(`chosen_card`);
        index += board_cards[index].move;
        index = (index + 8) % 8;
        cards[index].classList.add(`chosen_card`);
        document.querySelector(`#current_answer`).focus();
        if (cards[index].classList.contains(`closed`)) {
            Timer(queue_timer);
            document.querySelector(`#current_answer`).value = "";
        }
        else {
            document.querySelector(`#answer`).innerHTML = "כל הכבוד, יש לך עוד נקודה!!!!";
            document.querySelector(`#answer`).innerHTML += ` <audio autoplay>
                <source src="../succes.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
               </audio>`;
            document.querySelector(`audio`).play;
            players[current_player].score++;
            if (players[current_player].score > max_score)
                max_score = players[current_player].score;
            if (max_score == 6)
                Finish_Game();
            board_cards[index] = current_cards.pop();
            for (card of cards)
                card.classList.add('closed');
            cards[index].classList.remove('chosen_card');
            let images = document.querySelectorAll('.img img');
            images[index].setAttribute('src', "../images/" + board_cards[index].img_src);
            images[index].setAttribute('title', board_cards[index].name);
            cards[index].classList.remove('closed');
            timer = setTimeout(function () {
                cards[index].classList.add('closed');
                BeginQueues();
            }, 5000);
        }
    }
    else
        Finish_queue();
}
function Finish_queue() {
    cards[index].classList.remove('chosen_card');
    document.querySelector(`#answer`).innerHTML = "נכשלת, אולי בפעם הבאה!!!!";
    document.querySelector(`#answer`).innerHTML += ` <audio autoplay>
    <source src="../fail.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
   </audio>`;
    timer = setTimeout(function () {
        cards.forEach(card => {
            card.classList.add('closed');
        });
        BeginQueues();
    }, 3000);

}
function Finish_Game() {
    // let winner_player = players.find(function (player) {
    //     return player.score == 6;
    // });
    let item;
    if (localStorage.getItem(players[current_player].name) == null)
        item = 0;
    else
        item = localStorage.getItem(players[current_player].name)

    let itemJSON = JSON.parse(item);
    localStorage.setItem(`${players[current_player].name}`, itemJSON + 1);
    const win = document.createElement('h1');
    win.innerHTML += `${players[current_player].name} <br> נצחת כבר ${itemJSON + 1} פעמים!!`;
    win.innerHTML += ` <audio autoplay>
        <source src="../BRAVO.WAV" type="audio/WAV">
       Your browser does not support the audio element.
    </audio>`;
    document.querySelector(`audio`).play;
    document.querySelector('body').innerHTML = "";
    document.querySelector('body').classList.add('win');
    document.querySelector('body').innerHTML = `<img id="img_win" src=../images/winner1.JPG>`;
    document.querySelector('body').append(win);
}
//current_cards = indexes.map(index => all_cards[index]);

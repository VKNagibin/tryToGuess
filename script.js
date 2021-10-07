"use strict";

const gameBegin = function(theNumber) {

    return function closure() {

        let check = prompt("Угадай число от 1 до 100");
        let userNumber = (check === null || check.trim() == '') ? NaN : +check ;

        if (typeof userNumber == 'number' && !isNaN(userNumber)){

            switch (true) {
                case (userNumber > theNumber):
                    alert("Загаданное число меньше.");
                    closure();
                    break;
                case (userNumber < theNumber):
                    alert("Загаданное число больше.");
                    closure();
                    break;
                case (userNumber == theNumber):
                    alert("Вы выиграли!");
                    break;   
            }     

        } else {
            let i = confirm("Введи число");
            (i === false) ? alert('игра окончена'): closure();
        }

    };
};

let game = gameBegin( Math.round((Math.random() * 100) + 1) );

game();
const OPTIONS = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0, computerScore = 0;

function init(){
    const buttons = document.querySelectorAll('.buttons>button');

    buttons.forEach((button) => {
        let buttonName = button.textContent
        button.addEventListener('click', () => playerChoice(buttonName))
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice(){
    return OPTIONS[getRandomInt(0, 2)]
}

function playerChoice(choice){
    let computerChoice = getComputerChoice();
    console.log()

    const finalChoices = document.getElementById('choices')
    finalChoices.textContent = `Your choice: [${choice}] (vs) Computer choice: [${computerChoice}]`

    const gameResult = document.getElementById('status')


    if(computerChoice == choice){
        gameResult.textContent = "Its a draw!"
    } else {

        switch(choice){
            case 'Rock':
                if(computerChoice == 'Paper')
                gameResult.textContent = "You lost!"
                else
                gameResult.textContent = "You won!"
                break;

            case 'Paper':
                if(computerChoice == 'Scissors')
                gameResult.textContent = "You lost!"

                else
                gameResult.textContent = "You won!"
                break;

            case 'Scissors':
                if(computerChoice == 'Rock')
                gameResult.textContent = "You lost!"
                else
                gameResult.textContent = "You won!"
                break;

            default:
                break;
        }

    }

}
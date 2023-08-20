const OPTIONS = ['Rock', 'Paper', 'Scissors'];

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
    console.log(`Your choice: [${choice}] (vs) Computer choice [${computerChoice}]`)

    if(computerChoice == choice){
        console.log("Its a draw!")
    } else {
        
        switch(choice){
            case 'Rock':
                if(computerChoice == 'Paper')
                    console.log("You lost!")
                else
                    console.log("You won!")
                break;

            case 'Paper':
                if(computerChoice == 'Scissors')
                    console.log("You lost!")
                else
                    console.log("You won!")
                break;

            case 'Scissors':
                if(computerChoice == 'Rock')
                    console.log("You lost!")
                else
                    console.log("You won!")
                break;

            default:
                break;
        }
    }

    

}
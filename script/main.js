playerPoint = 0
computerPoint = 0

function getComputerChoice() {
    let rps = ['Rock', 'Paper', 'Scissors']
    let word_random = rps[Math.floor(Math.random() * rps.length)].toLowerCase()

    return word_random
}


function playGame() {
    for(let i = 0; i < 5; i++) {
        console.log(`RODADA: ${i+1}`)
        // const playerSelection = "scissors";
        const playerSelection = prompt('Make a choise: ');
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

        function playRound(playerSelection, computerSelection) {
            // your code here!
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();

            if (
                (playerSelection === 'rock' && computerSelection === "scissors") ||
                (playerSelection === 'paper' && computerSelection === "rock") ||
                (playerSelection === 'scissors' && computerSelection === "paper")
                ) {
                    console.log(`player Selection => ${playerSelection}`)
                    console.log(`computer Selection => ${computerSelection}`)
                    playerPoint++
                    console.log('PLAYER WIN ROUND!')


            } else if ( playerSelection == computerSelection ) {
                console.log(`player Selection => ${playerSelection}`)
                console.log(`computer Selection => ${computerSelection}`)
                console.log('EMPATE')
            } else {
                console.log(`player Selection => ${playerSelection}`)
                console.log(`computer Selection => ${computerSelection}`)
                computerPoint++
                console.log('COMPUTER WIN ROUND!')
            }

            console.log(`PONTUAÇAÕ DO JOGADOR: ${playerPoint}` )
            console.log(`PONTUAÇAÕ DO COMPUTADOR: ${computerPoint}` )
        }
    }

    // PONTUAÇÃO DO JOGO
    if (playerPoint > computerPoint) {
        console.log('PLAYER WIN THIS GAME!')
    } else if (playerPoint < computerPoint) {
        console.log('COMPUTER WIN THIS GAME!')
    } else {
        console.log('JOGO TERMINOU EMPATADO')
    }

}

playGame()


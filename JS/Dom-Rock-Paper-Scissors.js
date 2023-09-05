let score = JSON.parse(localStorage.getItem('score'))
        || {
                wins:0,
                losses:0,
                ties:0
            };
        /*if (score === null)
        {
            score = {
                wins:0,
                losses:0,
                ties:0
            };
        }*/
        
        updateScoreElement();

        function updateScoreElement()
        {
            document.querySelector('.js-score').innerHTML 
                = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;
        }

        function pickComputerMove()
        {
            const randomNumber = Math.random();
            let computerMove = '';

            if(randomNumber >= 0 && randomNumber < 1/3)
            {
                computerMove='rock';
            }
            else if(randomNumber >=1/3 && randomNumber < 2/3)
            {
                computerMove='scissors';
            }
            else
            {
                computerMove='paper';
            }

            return computerMove;
        }

        function playGame(playerMove)
        {
            const computerMove  = pickComputerMove();

            let result = '';
            
            if(playerMove == 'rock')
            {
                if(computerMove === 'rock')
                {
                    result='tie';
                }
                else if(computerMove === 'paper')
                {
                    result='lose';
                }
                else
                {
                    result='win';
                }
            }
            else if(playerMove == 'paper')
            {
                if(computerMove === 'rock')
                {
                    result='win';
                }
                else if(computerMove === 'paper')
                {
                    result='tie';
                }
                else
                {
                    result='lose';
                }
            }
            else
            {
                if(computerMove === 'rock')
                {
                    result='lose';
                }
                else if(computerMove === 'paper')
                {
                    result='win';
                }
                else
                {
                    result='tie';
                }
            }

            if(result == 'win')
            {
                score.wins += 1;
            }
            else if(result == 'lose')
            {
                score.losses += 1;
            }
            else
            {
                score.ties += 1;
            }

            localStorage.setItem('score',JSON.stringify(score));
            
            updateScoreElement();
            
            document.querySelector('.js-result').innerHTML = 
                `You ${result}.`;
            document.querySelector('.js-moves').innerHTML = 
                `You
            <img src="./icons/${playerMove}-emoji.png" class="move-icon">
            <img src="./icons/${computerMove}-emoji.png" class="move-icon">
            Computer`;
        }   
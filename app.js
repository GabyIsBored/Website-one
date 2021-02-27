 let userScore = 0;
 let computerScore = 0;
 const userScore_span = document.getElementById("userscore");
 const computerScore_span = document.getElementById("compscore");
 const scoreBoard_div = document.querySelector(".score-board");
 const result_p = document.querySelector(".result > p");
 const rock_div = document.getElementById("r");
 const paper_div = document.getElementById("p");
 const scissors_div = document.getElementById("s");
 const comprock_div = document.getElementById("compr");
 const comppaper_div = document.getElementById("compp");
 const compscissors_div = document.getElementById("comps");
 
 function getComputerChoice() {
    const choices = ['compr', 'compp', 'comps'];
    const randomNumber =(Math.floor(Math.random() * 3));
    return choices[randomNumber];
 }

  function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 1000)
    setTimeout(() => document.getElementById(computer).classList.add('red-glow'), 200)
    setTimeout(() => document.getElementById(computer).classList.remove('red-glow'), 1000)
    setTimeout(() => result_p.innerHTML = `${convertToWord(user)}${smallUserWord} Beats ${convertToWord(computer)}${smallCompWord}. You win!`, 1500)
  }
  
  function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 1000)
    setTimeout(() => document.getElementById(computer).classList.add('green-glow'), 200)
    setTimeout(() => document.getElementById(computer).classList.remove('green-glow'), 1000)
    setTimeout(() => result_p.innerHTML = `${convertToWord(user)}${smallUserWord} Loses To ${convertToWord(computer)}${smallCompWord}. You lose.`, 1500)
  }

  function draw(user, computer) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 1000)
    setTimeout(() => document.getElementById(computer).classList.add('gray-glow'), 200)
    setTimeout(() => document.getElementById(computer).classList.remove('gray-glow'), 1000)
    setTimeout(() => result_p.innerHTML = `${convertToWord(user)}${smallUserWord} Equals ${convertToWord(computer)}${smallCompWord}. It's a draw.`, 1500)
  }
  

  function convertToWord(letter) {
     if (letter == "r") return "Rock";
     if (letter == "p") return "Paper";
     return "Scissors";
  }

 
 function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {

      case "rcomps":
      case "pcompr":
      case "scompp":
         win(userChoice, computerChoice);
         break;
      case "rcompp":
      case "pcomps":
      case "scompr":
         lose(userChoice, computerChoice);
         break;
      case "pcompp":
      case "scomps":
      case "rcompr":
         draw(userChoice, computerChoice);
         break;
    }

 }

 function main() {
    rock_div.addEventListener('click', () => game("r"));
       
    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
  }

 
  main();
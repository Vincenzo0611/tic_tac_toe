let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
const cells = document.querySelectorAll('.cell');
let result = "";

const messege = document.getElementById('message');
const resetButton = document.getElementById("reset-btn");

cells.forEach(cell => {
    cell.addEventListener('click', function(event) {
        const index = event.target.dataset.index; // Przechwytywanie data-index
        handleClick(index); // Wywołanie funkcji i przekazanie indexu
    });
});

resetButton.addEventListener('click', resetGame);

function handleClick(index)
{
    if(board[index] != "" && result == "")
    {
        messege.textContent = "Pole zajęte"; 
    }
    else if(result == "")
    {
        const cell = cells[index];
        cell.textContent = currentPlayer;
        board[index] = currentPlayer;
        if(currentPlayer == "X")
            currentPlayer = "0";
        else
            currentPlayer = "X";


        result = checkWin();
        
        if(result == "draw")
        {
            messege.textContent = "Remis!"
        }
        else if(result == "")
        {
            messege.textContent = "Ruch gracza " + currentPlayer; 
        }
        else
        {
            messege.textContent = "Wygrał " + result + "!!!!"; 
        }
    }
}

function resetGame()
{
    board.fill("");
    result = "";

    currentPlayer = "X";
    cells.forEach(cell => {
        cell.textContent = "";
    })
    messege.textContent = "Ruch gracza " + currentPlayer;
}

function checkWin()
{
    if(board.includes(""))
    {
        for(i = 0; i < 9; i = i + 3)
        {
            if(board[i] !== "" &&board[i] == board[i+1] && board[i+1] == board[i+2])
                return board[i]
        }
        for(i = 0; i < 3; i++)
        {
            if(board[i] !== "" &&board[i] == board[i+3] && board[i+3] == board[i+6])
                return board[i]
        }
        if(board[0] !== "" &&board[0] == board[4] && board[4] == board[8])
            return board[0]
        if(board[2] !== "" &&board[2] == board[4] && board[4] == board[6])
            return board[0]
        return "";
    }
    else
    {
        return "draw";
    }
}

function startGame(){
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("player1", player1Name);
    localStorage.setItem("player2", player2Name);
    window.location = "gamePage.html";
}
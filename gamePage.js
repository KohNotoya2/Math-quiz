player1Name = localStorage.getItem("player1");
player2Name = localStorage.getItem("player2");
console.log(player2Name);
console.log(player1Name);
player1Score = 0;
player2Score = 0;
question_turn="player1";
answer_turn="player2";


document.getElementById("player1_name").innerHTML=player1Name+" :";
document.getElementById("player2_name").innerHTML=player2Name+" :";
document.getElementById("player1_score").innerHTML=player1Score;
document.getElementById("player2_score").innerHTML=player2Score;
document.getElementById("player_question").innerHTML="Question turn : "+player1Name;
document.getElementById("player_answer").innerHTML="Answer turn : "+player2Name;

function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    number1=document.getElementById("number1").value="";
    number2=document.getElementById("number2").value="";
}


function check() {
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer) {
        if(answer_turn=="player1") {
            player1Score=player1Score+1;
            document.getElementById("player1_score").innerHTML=player1Score;
            answer_turn="player2";
            question_turn="player1";
            document.getElementById("player_question").innerHTML="Question turn : "+player1Name;
            document.getElementById("player_answer").innerHTML="Answer turn : "+player2Name;

        }

        else {
           player2Score=player2Score+1;
           document.getElementById("player2_score").innerHTML=player2Score;
           answer_turn="player1";
           question_turn="player2";
           document.getElementById("player_answer").innerHTML="Answer turn : "+player1Name;
           document.getElementById("player_question").innerHTML="Question turn : "+player2Name;
        }
    }
}
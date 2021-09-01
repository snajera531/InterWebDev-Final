//reading in the data from the api
let url = 'http://localhost:3000/api'

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        //display said data in bar graphs
        const canvas1 = document.getElementById('questionOneCanvas');
        const canvas2 = document.getElementById('questionTwoCanvas');
        const canvas3 = document.getElementById('questionThreeCanvas');
        const ctx1 = canvas1.getContext('2d');
        const ctx2 = canvas2.getContext('2d');
        const ctx3 = canvas3.getContext('2d');

        ctx1.strokeStyle = '#fff';
        ctx2.strokeStyle = '#fff';
        ctx3.strokeStyle = '#fff';

        //q1 graph
        ctx1.beginPath();
        ctx1.moveTo(50, 250);   
        ctx1.lineTo(575, 250);
        ctx1.stroke();

        //q2 graph
        ctx2.beginPath();
        ctx2.moveTo(50, 250);
        ctx2.lineTo(575, 250);
        ctx2.stroke();

        //q3 graph
        ctx3.beginPath();
        ctx3.moveTo(50, 250);
        ctx3.lineTo(575, 250);
        ctx3.stroke();

        //question one
        //first answer == Color.red
        let answerCount = 0;
        answerCount = data.filter(person => person.questionOne == "Web").length;
        answerCount *= 10;
        ctx1.fillStyle = "#f00";
        ctx1.fillRect(75, (249 - answerCount), 100, answerCount);
        ctx1.fillStyle = "#fff";
        ctx1.font = "12px Comic Sans MS";
        ctx1.fillText('Web', 75, 265);
        ctx1.font = "20px Comic Sans MS";
        ctx1.fillText((answerCount / 10), 110, (240 - (answerCount)));

        //second answer == Color.yellow
        answerCount = data.filter(person => person.questionOne == "Game").length;
        answerCount *= 10;
        ctx1.fillStyle = "#ff0";
        ctx1.fillRect(200, (249 - answerCount), 100, answerCount);
        ctx1.fillStyle = "#fff";
        ctx1.font = "12px Comic Sans MS";
        ctx1.fillText('Game', 200, 265);
        ctx1.font = "20px Comic Sans MS";
        ctx1.fillText((answerCount / 10), 235, (240 - (answerCount)));
        
        //third answer == Color.green
        answerCount = data.filter(person => person.questionOne == "Why does this matter?").length;
        answerCount *= 10;
        ctx1.fillStyle = "#0f0";
        ctx1.fillRect(325, (249 - answerCount), 100, answerCount);
        ctx1.fillStyle = "#fff";
        ctx1.font = "12px Comic Sans MS";
        ctx1.fillText('Why matter?', 325, 265);
        ctx1.font = "20px Comic Sans MS";
        ctx1.fillText((answerCount / 10), 360, (240 - (answerCount)));

        //fourth answer == Color.blue
        answerCount = data.filter(person => person.questionOne == "Who cares, let people be people").length;
        answerCount *= 10;
        ctx1.fillStyle = "#00f";
        ctx1.fillRect(450, (249 - answerCount), 100, answerCount);
        ctx1.fillStyle = "#fff";
        ctx1.font = "12px Comic Sans MS";
        ctx1.fillText('Who cares?', 450, 265);
        ctx1.font = "20px Comic Sans MS";
        ctx1.fillText((answerCount / 10), 485, (240 - (answerCount)));

        //question 2
        //first answer = Color.red
        answerCount = data.filter(person => person.questionTwo == "Harrison").length;
        answerCount *= 10;
        ctx2.fillStyle = "#f00";
        ctx2.fillRect(75, (249 - answerCount), 100, answerCount);
        ctx2.fillStyle = "#fff";
        ctx2.font = "12px Comic Sans MS";
        ctx2.fillText('Harrison', 75, 265);
        ctx2    .font = "20px Comic Sans MS";
        ctx2.fillText((answerCount / 10), 110, (240 - (answerCount)));
        
        //second answer == Color.yellow
        answerCount = data.filter(person => person.questionTwo == "Beardall").length;
        answerCount *= 10;
        ctx2.fillStyle = "#ff0";
        ctx2.fillRect(200, (249 - answerCount), 100, answerCount);
        ctx2.fillStyle = "#fff";
        ctx2.font = "12px Comic Sans MS";
        ctx2.fillText('Beardall', 200, 265);
        ctx2.font = "20px Comic Sans MS";
        ctx2.fillText((answerCount / 10), 235, (240 - (answerCount)));
        
        //third answer == Color.green
        answerCount = data.filter(person => person.questionTwo == "Reed").length;
        answerCount *= 10;
        ctx2.fillStyle = "#0f0";
        ctx2.fillRect(325, (249 - answerCount), 100, answerCount);
        ctx2.fillStyle = "#fff";
        ctx2.font = "12px Comic Sans MS";
        ctx2.fillText('Reed', 325, 265);
        ctx2.font = "20px Comic Sans MS";
        ctx2.fillText((answerCount / 10), 360, (240 - (answerCount)));

        //fourth answer == Color.blue
        answerCount = data.filter(person => person.questionTwo == "Marshall").length;
        answerCount *= 10;
        ctx2.fillStyle = "#00f";
        ctx2.fillRect(450, (249 - answerCount), 100, answerCount);
        ctx2.fillStyle = "#fff";
        ctx2.font = "12px Comic Sans MS";
        ctx2.fillText('Marshall', 450, 265);
        ctx2.font = "20px Comic Sans MS";
        ctx2.fillText((answerCount / 10), 485, (240 - (answerCount)));

        //question 3
        //first answer == Color.red
        answerCount = data.filter(person => person.questionThree == "Professor Beatty").length;
        answerCount *= 10;
        ctx3.fillStyle = "#f00";
        ctx3.fillRect(75, (249 - answerCount), 100, answerCount);
        ctx3.fillStyle = "#fff";
        ctx3.font = "12px Comic Sans MS";
        ctx3.fillText('Professor Beatty', 75, 265);
        ctx3.font = "20px Comic Sans MS";
        ctx3.fillText((answerCount / 10), 110, (240 - (answerCount)));

        //second answer == Color.yellow
        answerCount = data.filter(person => person.questionThree == "Professor Maple").length;
        answerCount *= 10;
        ctx3.fillStyle = "#ff0";
        ctx3.fillRect(200, (249 - answerCount), 100, answerCount);
        ctx3.fillStyle = "#fff";
        ctx3.font = "12px Comic Sans MS";
        ctx3.fillText('Professor Maple', 200, 265);
        ctx3.font = "20px Comic Sans MS";
        ctx3.fillText((answerCount / 10), 235, (240 - (answerCount)));

        //third answer == Color.green
        answerCount = data.filter(person => person.questionThree == "Professor Cantera").length;
        answerCount *= 10;
        ctx3.fillStyle = "#0f0";
        ctx3.fillRect(325, (249 - answerCount), 100, answerCount);
        ctx3.fillStyle = "#fff";
        ctx3.font = "12px Comic Sans MS";
        ctx3.fillText('Professor Cantera', 325, 265);
        ctx3.font = "20px Comic Sans MS";
        ctx3.fillText((answerCount / 10), 360, (240 - (answerCount)));

        //fourth answer == Color.blue
        answerCount = data.filter(person => person.questionThree == "Dr Kohler").length;
        answerCount *= 10;
        ctx3.fillStyle = "#00f";
        ctx3.fillRect(450, (249 - answerCount), 100, answerCount);
        ctx3.fillStyle = "#fff";
        ctx3.font = "12px Comic Sans MS";
        ctx3.fillText('Dr Kohler', 450, 265);
        ctx3.font = "20px Comic Sans MS";
        ctx3.fillText((answerCount / 10), 485, (240 - (answerCount)));
    });
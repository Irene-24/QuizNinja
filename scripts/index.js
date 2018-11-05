
const quiz = [
    { name: "Superman", realName:"Clark Kent"},
    { name: "Wonder Woman ", realName:"Diana Prince"},
    { name: "Batman", realName:"Bruce Wayne"}
];

const view = {
    score: document.querySelector("#score strong"),
    question: document.getElementById("question"),
    result: document.getElementById("result"),
    info: document.getElementById("info"),
    render(target,content,attributes)
    {
        for (const key in attributes) 
        {
            target.setAttribute(key,attributes[key]);
        }
        target.innerHTML = content;
    }
}

const game = 
            {
                start(quiz) 
                 {

                    alert('Welcome to Quiz Ninja!');
                    this.questions = [...quiz]; //game.questions = [array ]
                    this.score = 0; //game.score = 0

                    for (const question of this.questions) 
                    {
                        this.question = question; //game.question = an object in array
                        this.ask();
                    }

                    this.End();                   

                 },

                ask() 
                {
                    const question = `What is ${this.question.name}'s real name?`;
                    const response = prompt(question);
                    view.render(view.question,question);
                    this.check(response);

                },

                check(resp) 
                {
                    const answer = this.question.realName;
                    if (resp === answer) 
                    {
                        view.render(view.result,"Correct!",{"class":"correct"});
                        alert('Correct');
                        this.score++;
                        view.render(view.score,this.score);
                    }

                    else 
                    {
                        view.render(view.result, `Bzzt!! Wrong, The correct answer is ${answer}`, { "class": "wrong" });
                        alert(`Bzzt!! Wrong, The correct answer is ${answer}`);
                    }

                },

                End() 
                {
                    view.render(view.info, `Game Over! You scored ${this.score} point${this.score !== 1 ? 's' : ''}.`);
                   
                 }

        }


game.start(quiz);






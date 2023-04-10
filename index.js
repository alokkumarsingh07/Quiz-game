const quizdata = [
    {
        question: 'How old is Alok KUmar',
        a: '10',
        b: '17',
        c: '26',
        d: '20',
        correct: 'd'
    }, {
        question: 'What is the most Programming language in 2021',
        a: 'java',
        b: 'c',
        c: 'pytjon',
        d: 'javascript',
        correct: 'd'
    }, {
        question: 'Who is the President of us?',
        a: 'Modi',
        b: 'Donald TRump',
        c: 'iVAN SAlDAno',
        d: 'Mihai Andrei',
        correct: 'b'
    }, {
        question: 'What does HTML Stannd For?',
        a: 'Hypertext Markup language',
        b: 'cascading style sheet',
        c: 'jason object notation',
        d: 'Helicopters terminals motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }
];

const quiz = document.getElementById("quiz")

const answerE1s = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit')



let currentquiz = 0;
let score = 0;


loadquiz();

function loadquiz() {
    deselectanswer();
    const currentquizdata = quizdata[currentquiz];

    questionE1.innerText = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;

    // currentquestion++;


}

function getelected() {
    // const answerE1s = document.querySelectorAll('.answer');

    let answer = undefined;

    answerE1s.forEach((answerE1) => {
        if (answerE1.checked) {
            answer = answerE1.id;
        }
    });
    return answer;
}

function deselectanswer(){
    answerE1s.forEach((answerE1) => {
      answerE1.checked = false;
    });
}


submitbtn.addEventListener("click", () => {
    //chect to see the answer
    const answer = getelected();

    if (answer) {
        if (answer === quizdata[currentquiz].correct) {
            score++;
        }
        currentquiz++;
        if (currentquiz < quizdata.length) {
            loadquiz();
        }
        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizdata.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});
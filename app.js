const correctAnswers = ['A', 'B', 'A'];

const form = document.querySelector('.quiz-form');
const viewScore = document.querySelector('span.text-primary');
const viewScoreBox = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    // these are from the radio buttons
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value];

    // check the answers 

    userAnswers.forEach((ans, index) => { //this could have used a cumulator instead...
        if(ans === correctAnswers[index]){
            score += 33;
        }
    });

    scrollTo(0,0);
    console.log(score);
    viewScoreBox.classList.remove('d-none');

    //animate the score instead of
    //viewScore.textContent = `${score}%`;
    let output = 0;
    const timer = setInterval(()=> {
        viewScore.textContent = `${output}%`;
        if(output === score ){
            clearInterval(timer);
        } else {
            output++
        }
    }, 10);
});

// window object to scroll back up 
// use scrollTo()

'use strict'
const questionsAPI = 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz';
const quiz = document.body.querySelector('.quiz');


async function loadScript(url) {
    let response = await fetch(url);

    if(response.status == 200) {
        let result = await response.json();
        return result;
    }  
    alert(new Error(`Ошибка адреса ${response.status}`));
}


function renderFromServer(loadScript) {
    loadScript.then(result => {
        result.forEach(item => {
            render(item)
        });
        return result
    })
    .then(res => {
        let arr = [...res];
        // console.log(arr);
        const quizItem = document.body.querySelectorAll('.quiz-item');
        // const optionWrapper = quizItem.querySelectorAll('.option-wrapper');
        // console.log(quizItem.children);


        
        // let arrAnswer = [];

        // function f() {
        //     arr.forEach((item) => {
        //         arrAnswer.push(item.answer);
        //     })
        //     optionWrapper.forEach((item, i) => {
        //         console.log(item[i])
        //         // if() {
        //         //     item.style.backgroundColor = 'red'
        //         // }
        //     })
        //     // console.log(arrAnswer);
        // }
        // f()


        quiz.addEventListener('click', (e) => {
            const target = e.target;
            if(target.classList.contains('option-wrapper')) {
                // console.log(quizItem.children)
                quizItem.forEach((item, i) => {
                    console.log(item.children)
                })
            }
        });
    })
};

renderFromServer(loadScript(questionsAPI))


function render(elem) {
    const div = document.createElement('div');
    div.innerHTML = `
    <section class="quiz-item">
        <h3>${elem.question}</h3>
        ${
           elem.options.map((option) => {
            return `
            <div class="option-wrapper">
            <label>
            <input type="radio" required="" name="q1" value="1">
            <p>${option}</p>
            </label>
            </div>
            `
           }).join('')
        }
    </section>
    `;
    quiz.prepend(div);
};
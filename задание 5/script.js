let answer = document.querySelector('.answer')
let btn = document.querySelector('.btn')
const xhr = new XMLHttpRequest();

function initLocalStorage (value) {

    answer.innerHTML = value;
    
}
const answerJson = localStorage.getItem('answer');

initLocalStorage(JSON.parse(answerJson));


function initPage() {

    function check() {

        let input1 = document.querySelector('.input1').value
        let input2 = document.querySelector('.input2').value

        answer.innerHTML = ''

        


        if ((input1 < 1 || input1 > 10 || isNaN(+input1)) && (input2 < 1 || input2 > 10 || isNaN(+input2))) {

            answer.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
        } else {
            if (input1 < 1 || input1 > 10 || isNaN(+input1)) {

                answer.innerHTML = 'Номер страницы вне диапазона от 1 до 10';

            } else if (input2 < 1 || input2 > 10 || isNaN(+input2)) {

                answer.innerHTML = 'Лимит вне диапазона от 1 до 10';

            } else {
                request(input1, input2);
            }
        }
    }

    function request(a, b) {
        fetch(`https://picsum.photos/v2/list?page=${a}&limit=${b}`)

            .then((response) => {
                return response.json();
            })

            .then((data) => {




                for (i = 0; i < data.length; i++) {

                    answer.innerHTML += `<img class = "image" src=" ${data[i].download_url}" alt="картинка ${[i + 1]}"></img>`;
                    
                }
                
                let answerJson = JSON.stringify(answer.innerHTML)
                
                answerJson = localStorage.setItem('answer', answerJson)
                
                
            })
    }
    
    btn.addEventListener('click', check);
}

document.addEventListener('DOMContentLoaded', initPage)
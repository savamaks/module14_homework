


let answer = document.querySelector('.answer')
let btn = document.querySelector('.btn')
const xhr = new XMLHttpRequest();
let input = document.querySelector('.input');




    // console.log(input.value)

btn.onclick = function () {
    
        answer.innerHTML ='';
        if (+input.value <= 10 && +input.value >= 1 && !isNaN(+input.value)) {

            xhr.open("get", `https://picsum.photos/v2/list?limit=${+input.value}.`, true);

            xhr.send();
            
            xhr.onload = function() {

                let team =JSON.parse(xhr.response);


                for (let i=0; i < input.value;i++){

                    answer.innerHTML += `<img class = "image" src=" ${team[i].download_url}" alt="картинка ${i+1}" ></img>`;
                    console.log(answer.value)
                }

                z = JSON.stringify(answer.value);
            };
            
        } else {

            answer.innerHTML = 'число вне диапазона от 1 до 10';
        }

        
    //     answer.innerHTML = localStorage.getItem('answer');
    // answer.oninput = () =>{
    //     localStorage.setItem('answer', answer.innerHTML)

    // }
    };
    
    
    
    

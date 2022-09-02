// Функция выполнения promise
function usePromise() {
  // Создаем promise
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.trunc(Math.random() * 100);
      //проверка числа на четность
      if (random % 2 === 0){
        resolve (random);
      } else {
       reject (random);
      }  
    }, 3000);
  });

  // Выполняем promise
  myPromise
    .then((result) => {
      console.log(`Завершено успешно. Сгенерированное число — ${result}`);
    })
    .catch((error) => {
      console.log(`Завершено с ошибкой. Сгенерированное число — ${error}`);
    })
};

usePromise();

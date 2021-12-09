function delay(millisecond) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 랜덤함수를 이용하여 랜덤하게 함수를 실행시키고 싶을 때 
            if (Math.floor(Math.random() * 10) % 2 === 0) {
                resolve("sucess");
            } else {
                reject("failure");
            }
        }, millisecond);
    });
}

// 기존의 promise 를 이요한 코드
// then 과 catch에 callback 함수를 통해 원하는 동작을 하도록 분기한다.
// delay 시간을 줌으로써 비동기적인 프로그래밍을 구현한다.
delay(3000)
    .then((result) => {
        console.log("done promise! " + result);
    })
    .catch((error) => {
        console.error("fail promise! " + error);
    });
    console.log("----------------------------");

    // 비동기 함수, 함수 앞에 async 예약어를 추가
    // 기존의 promise 객체를 반환하는 함수가 있다면
    // await 추가
    async function main () {
        try {
            console.log("start ~ !!")
            const result = await delay(3000);
            console.error("done async!" + result);
        } catch(e) {
            console.error("fail async!" + e);
        }
    }

    main();

    /*
    캡틴판교
    https://joshua1988.github.io/web-development/javascript/js-async-await/
    아래 코드 이해해보기 
    */

function fetchUser() {
    var url = 'https://jsonplaceholder.typicode.com/users/1'
    return fetch(url).then(function(response) {
        return response.json();
    });
}
    
function fetchTodo() {
    var url = 'https://jsonplaceholder.typicode.com/todos/1';
        return fetch(url).then(function(response) {
            return response.json();
        });
}

async function logTodoTitle() {
  try {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    console.log(error);
  }
}
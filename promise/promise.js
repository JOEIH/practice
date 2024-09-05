//GET 요청을 위한 비동기 함수
const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                //비동기 처리 성공하면 비동기 처리 결과를 resolve 함수에 인수로 전달하면서 호출
                resolve(JSON.parse(xhr.response));
            } else {
                //실패하면 에러를 reject함수에 인수로 전달하면서 호출
                reject(new Error(xhr.status));
            }
        }
    })
}
//promiseGet함수는 프로미스 반환
promiseGet('https://jsonplaceholder.typicode.com/posts/1');


//후속 처리 메소드 then
//fulfilled
new Promise(resolve => resolve('fulfilled'))
    .then(v => console.log(v), e => console.error(e));
//rejected
new Promise((_, reject) => reject(new Error('rejected')))
    .then(v => console.log(v), e => console.error(e));

//프로미스 에러 처리 방법 - then메소드 두번째 콜백 함수로, catch로
//catch가 권장됨
//catch - catch메소드의 콜백 함수는 프로미스가 rejected 상태인 경우에만 호출
new Promise((_, reject) => reject(new Error('rejected')))
    .catch(e => console.log(e));

//finally - 무조건 한 번 호출
new Promise(() => {})
    .finally(() => console.log('finally'));

//프로미스로 구현한 비동기 함수 get으로 후속 처리 구현하기
const promiseGet2 = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(new Error(xhr.status));
            }
        }
    })
}
promiseGet2('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('Bye!'));



//프로미스 체이닝 - 후속 처리 메소드가 항상 프로미스를 반환하므로 연속적으로 호출할 수 있음
const url = 'https://jsonplaceholder.typicode.com';

promiseGet3(`${url}/posts/1`)
    .then(({userId}) => promiseGet3(`${url}/users/${userId}`))
    .then(userInfo => console.log(userInfo))
    .catch(err => console.log(err));


//정적 메소드
//Promise.resolve
const resolvedPromise = Promise.resolve([1,2,3]);
resolvedPromise.then(console.log);

//Promise.reject
const rejectedPromise = Promise.reject(new Error('Error!'));
rejectedPromise.catch(console.log);

//Promise.all
const requestData1 = () => 
    new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () =>
    new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => 
    new Promise(resolve => setTimeout(() => resolve(3), 1000));

Promise.all([requestData1(), requestData2(), requestData3()])
    .then(console.log)
    .catch(console.error);

//Promise.race
Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  //가장 먼저 fulfilled
])
    .then(console.log) //3
    .catch(console.error);

//Promise.allSettled
Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 2000)),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Error!')), 1000))
]).then(console.log);
/*
[
    {status: "fulfilled", value: 1},
    {status: "rejected", reason: Error: Error! at <anonymous>:3:54}
]
*/

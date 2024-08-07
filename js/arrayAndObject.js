//배열
//v 배열의 값, k 배열의 인덱스
const arr = Array.from(Array(5), function (v, k) {
    return k + 1;
})
console.log(arr); //[ 1, 2, 3, 4, 5 ]
//join
console.log(arr.join(",")); //1,2,3,4,5
//reverse - 깊은 복사로, 한 번 사용하면 원본 배열도 수정됨
console.log(arr.reverse()); //[ 5, 4, 3, 2, 1 ]
//push, pop
const arr1 = [1, 2, 3]
arr1.push(5, 67)
console.log(arr1) //[ 1, 2, 3, 5, 67 ]

arr1.pop()
console.log(arr1) //[ 1, 2, 3, 5 ]

//shift, unshift
arr1.shift();
arr1.shift();
console.log(arr1); //[ 3, 5 ]

arr1.unshift(10);
console.log(arr1); //[ 10, 3, 5 ]

//slice - 얕은 복사로, 원본 배열에는 변화 없음
console.log(arr.slice(0, 2)) //[ 5, 4 ]

//splice - 중간에 있는 요소를 자르고 싶을 때 사용
console.log(arr.splice(1, 2)) //[ 4, 3 ]

//for of
for (const item of arr) {
    console.log(item)
}
//5
//2
//1

//배열은 객체 타입
const arr2 = [1, 2, 3]
arr2["key"] = "value";
console.log(arr2) //[ 1, 2, 3, key: 'value' ]
console.log(arr2.length) //3 - 배열의 길이는 변하지 않음


//객체
//객체 생성
const obj1 = new Object();
const obj2 = {};
const obj3 = {name: "hyun", age: 24};
console.log(obj1) //{}
console.log(obj2) //{}
console.log(obj3) //{ name: 'hyun', age: 24 }

obj3["email"] = "hyun@gmail.com";
obj3.phone = '01000000000'
console.log(obj3)
/*
{
  name: 'hyun',
  age: 24,
  email: 'hyun@gmail.com',
  phone: '01000000000'
}
*/

delete obj3.phone;
console.log(obj3) //{ name: 'hyun', age: 24, email: 'hyun@gmail.com' }

//in operator
console.log('email' in obj3) //true
console.log('phone' in obj3) //false

//객체순회
console.log(Object.keys(obj3)); //[ 'name', 'age', 'email' ] 키 값만 출력
console.log(Object.values(obj3)); //[ 'hyun', 24, 'hyun@gmail.com' ] 값만 출력

//객체순회 for in
for (const key in obj3) {
    console.log(key, obj3[key])
}
/*
name hyun
age 24
email hyun@gmail.com
*/


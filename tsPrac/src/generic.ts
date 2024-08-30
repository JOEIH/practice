//타입스크립트 중복 제거
//모든 속성이 리터럴 타입인 Zero, Nero 인터페이스
//name, age의 타입만 다름
interface Zero {
    type: 'human',
    race: 'yellow',
    name: 'zero',
    age: 28
}
interface Nero {
    type: 'human',
    race: 'yellow',
    name: 'nero',
    age: 32
}

interface Person<N, A = number> {
    type: 'human',
    race: 'yellow',
    name: N,
    age: A
}
interface Zero extends Person<'zero'> {}
interface Nero extends Person<'nero', 32> {}


//제네릭 이용한 배열 선언
//타입 간 중복되는 것을 없애고 하나의 타입을 여러 방법으로 재사용할 수 있음
// interface Array<T> {
//     [key: number]: T,
//     length: number,
//     //기타 속성
// }

// //타입 별칭에 제네릭 사용한 경우
// // type Person<N,A> = {
// //     type: 'human',
// //     race: 'yellow',
// //     name: N,
// //     age: A
// // }
// // type Zero = Person<'zero', 28>;
// // type Nero = Person<'nero', 32>;

// //클래스에 제네릭 사용
// // class Person<N,A>  {
// //     name: N;
// //     age: A;
// //     constructor(name: N, age: A) {
// //         this.name = name;
// //         this.age = age;
// //     }
// // }

// //함수에 제네릭 사용
// //표현식일 때
// const personFactoryE = <N, A>(name: N, age: A) => ({
//     type: 'human',
//     race: 'yellow',
//     name,
//     age
// })
// //선언문일 때
// function personFactoryD<N,A>(name: N, age: A) {
//     return ({
//         type: 'human',
//         race: 'yellow',
//         name,
//         age
//     })
// }   


// //인터페이스, 타입 교차 사용 가능
// interface PersonI<N, A> {
//     type: 'human',
//     race: 'yellow',
//     name: N,
//     age: A
// }
// type PersonT<N,A> = {
//     type: 'human',
//     race: 'yellow',
//     name: N,
//     age: A
// }
// type Zero = PersonI<'zero', 28>;
// interface Nero extends PersonT<'nero', 32> {}

// //객체, 클래스의 메소드에 따로 제네릭 표기할 수 있음
// class Person<N,A>  {
//     name: N;
//     age: A;
//     constructor(name: N, age: A) {
//         this.name = name;
//         this.age = age;
//     }
//     method<B>(param: B){}
// }
// interface Person<N, A> {
//     type: 'human',
//     race: 'yellow',
//     name: N,
//     age: A,
//     method: <B>(param: B) => void
// }


//상수 타입 매개변수
// function values<const T>(initial: T[]) {
//     return {
//         hasValue(value: T) {return initial.includes(value)}
//     }
// }

// const savedValues = values(['a,', 'b', 'c']);
// savedValues.hasValue('x');
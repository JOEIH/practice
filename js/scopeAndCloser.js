// //클로저
// function counting() {
// 	let i = 0;
// 	for (i = 0; i < 5; i += 1) {
// 		setTimeout(function() {
// 			console.log(i);
// 		}, i * 100);
// 	}
// }
// counting(); //5 5 5 5 5

//IIFE 이용
// function counting() {
//     let i = 0;
//     for (i = 0; i < 5; i += 1) {
//         (function (number) {
//             setTimeout(function () {
//                 console.log(number);
//             }, number * 100);
//         })(i);
//     }
// }
// counting(); //0 1 2 3 4

//블록 수준 스코프 let 이용
function counting() {
    for (let i = 0; i < 5; i += 1) {
        setTimeout(function () {
            console.log(i);
        }, i * 100);
    }
}
counting(); //0 1 2 3 4
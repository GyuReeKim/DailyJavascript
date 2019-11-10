// const readline = require('readline') // 입력을 받기 위해 사용하는 모듈
// const userName = readline.createInterface({ // 최초에는 createInterface를 통해 input과 output을 생성해준다.
//     input: process.stdin,
//     output: process.stdout
// })
// userName.question('이름을 입력하세요', (answer) => {
//     console.log(answer)
//     userName.close() // 함수를 호출한 이후에 close함수를 꼭 사용해야한다.
// })


// // 입력 팝업창 생성
// const userName = prompt('who are you?')
// let message = ''


// // if문
// if (userName === '관리자') {
//     message = 'hi admin'
// } else if (userName === '규리') {
//     message = 'hi 귤'
// } else {
//     message = `hi ${userName}`
// }
// console.log(message)


// // switch문
// switch(userName) {
//     case '관리자': {
//         message = 'hi admin'
//         break
//     }
//     case '규리': {
//         message = 'hi 귤'
//         break
//     }
//     default: {
//         message = `hi ${userName}`
//     }
// }
// console.log(message)


// // while문
// let i = 0
// while (i < 5) {
//     console.log(i)
//     i++
// }


// // for문
// for (let a = 0 ; a < 5 ; a++) {
//     console.log(a)
// }


// // let of문
// const numbers = [0,1,2,3,4,5]
// for (let num of numbers) {
//     console.log(num)
// }


// // let을 함수 안에서 선언하면 그 변수는 함수 안에서만 적용된다.
// let x = 1
// if (x === 1) {
//     let x = 2
//     console.log(x)
// }
// console.log(x)


// // const를 함수 안에서 선언하면 그 변수는 함수 안에서만 적용된다.
// const y = 9
// if (y === 9) {
//     const y = 20
//     console.log(y)
// }
// console.log(y)


// // var는 자유롭게 할당받는다.
// function varTest() {
//     var x = 1
//     if (true) {
//         var x = 2
//         console.log(x)
//     }
//     console.log(x)
// }
// varTest()


// const sentence1 = 'hello\n'
// const sentence2 = 'hel'
// const sentence3 = 'lo'
// console.log(sentence1+sentence2+sentence3)


const isValid = true
console.log(isValid)
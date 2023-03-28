// const num1 = Math.ceil(Math.random()*10);
// const num2 = Math.ceil(Math.random()*10);
//
// const questionE1 = document.getElementsById("question");
//
// const inputE1 = document.getElementsById("input");
//
// const formE1 = document.getElementsById("form");
//
// const scoreE1 = document.getElementsById("score");
//
// let score=JSON.parse(localStorage.getItem("score"));
//
// if(!score){
//   score=0;
// }
// scoreE1.innerText = `score: ${score}`
// questionE1.innerText =` What is ${num1} multiply by ${num2}?`
//
// const correctAns = num1 * num2;
//
// formE1.addEventListener("submit",()=>{
// const userAns = +inputE1.value;
//     if (userAns == correctAns){
//       score++;
//       updateLocalStorage();
//        }
//     else {
//       score--;
//       updateLocalStorage();
//     }
//
// });
//  function updateLocalStorage(){
//       localStorage.setItem("score" , JSON.stringfy(score));
//  }

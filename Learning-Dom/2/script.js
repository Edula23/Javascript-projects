// Event listeners

// element.addEventListner("click", function)

// const buttonTwo = document.querySelector('.box-2');
// function alert2(){
//     alert("I love myself two");
// }
// buttonTwo.addEventListener("click", alert2);

// // Mouseover

const buttonThree = document.querySelector('.box-3');

buttonThree.addEventListener("mouseover", ()=>{
    buttonThree.style.backgroundColor = "red";
})
buttonThree.addEventListener("mouseout", ()=>{
    buttonThree.style.backgroundColor = "";
})
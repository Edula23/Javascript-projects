const typingText = document.querySelector("h1 span");
const words = ["awesome", "fabulous", "smart", "intelligent"];

let wordIndex = 0; //this variable keeps track of the current word index int the words array
let charIndex = 0; //keeps track of how many characters of the word are typed or deleted
let isDeleting = false; // this variable indicates the current action is typing or deleting. Setting it to false means it is not deleting hence it is currently typing
let typingInterval = 200; // Typing speed in 200 milliseconds. time interval at which each character is being typed
let deletingInterval = 100; // deleting speed 100 milliseconds time interval at which each character is being deleted
let delayAfterWord = 2200; // delay interval just before each word is typed

//typeEffect arrow function handles the typing and deleting animation
const typeEffect = () => {  
    //this currentWord retrieves the current word from the words array based on the word 
    const currentWord = words[wordIndex]  ;
    //this helps to extract a substring of the current word starting from index 0 and ending at the index specified
    typingText.textContent= currentWord.substring(0, charIndex);
    //if statement is for the typing effect
    if (!isDeleting && charIndex < currentWord.length){
        charIndex++;  //increment of charindex by one to keep moving to next character
        setTimeout(typeEffect, typingInterval); 
    }
    //else if statement is for the deleting effect
    else if(isDeleting && charIndex){
        charIndex--;
        setTimeout(typeEffect, deletingInterval );

    }
    else{//to change words and responsible for the interval
        // the % words.length is to ensure that if wordIndex exceeds the given wordIndex then it will start from the beginning   
        isDeleting = !isDeleting; //toggle effect between typing phase and deleting phase
        wordIndex = (wordIndex + (isDeleting ? 0 : 1 )) % words.length;
        setTimeout(typeEffect, isDeleting ? deletingInterval: delayAfterWord)
    }
};
//this line calls the function for the first time to start the text effect
typeEffect();
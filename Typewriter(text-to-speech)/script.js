const sentenceSelector = document.getElementById('sentence-selector');
const typewriterText =  document.getElementById('typewriter-text');
const typeButton =  document.getElementById('type-button');

let isTyping = false ; //typing effect is not currently active
let typingInterval ; //storing Id of the interval timer used for typing effect
let currentIndex = 0; //tracks the current position of sentence being typed
let currentSentence = ''; //stores the text being typed currently

//function to start the typing effect
function startTypewriter(){
    if(isTyping){
        return;
    }
    isTyping = true; //indicates that typing has started
    typeButton.disabled = true;
    typewriterText.textContent = ''; //clears any existing text
    currentIndex = 0; //resets the typing position to start of sentence
    currentSentence = sentenceSelector.value; //sets one of the sentences to be typed
    typingInterval = setInterval(typeNextCharacter, 200);
}

typeButton.addEventListener('click', startTypewriter);

//function responsible for moving from one character to the other
function typeNextCharacter(){
    if(currentIndex < currentSentence.length){
        typewriterText.textContent += currentSentence.charAt(currentIndex);
        currentIndex++;
    }
    else{
        clearInterval(typingInterval );
        isTyping = false;
        typeButton.disabled = false;
        speakCompletedText(); //this function converst the text to speech and read it aloud
    }
}

function speakCompletedText(){
    const utterance = new SpeechSynthesisUtterance(currentSentence);  //creates a nnew instance of a speech request
    utterance.rate  = 1; //0.1(slowest speed) to 10(fastest speed)
    utterance.volume = 0.1;
    utterance.pitch = 0.2;
    utterance.lang = "am-ET";
    speechSynthesis.speak(utterance);
}

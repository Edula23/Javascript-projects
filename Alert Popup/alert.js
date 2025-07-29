const triggerButton = document.querySelector('.trigger-button');
const alertPopup = document.getElementById('alert-popup');
const closeButton = document.getElementById('close-alert');

let timeoutId; //this to store timer ID

// function to show alert
function showAlert(){
    alertPopup.classList.add('show');
    timeoutId = setTimeout(function(){
        hideAlert();
     },3000)
}
triggerButton.addEventListener('click', showAlert);

// function to hide alert
function hideAlert(){
    alertPopup.classList.remove('show');
    clearTimeout(timeoutId);
}

closeButton.addEventListener('click', hideAlert );
const showToastBtn = document.getElementById('show-toast');
const toast = document.getElementById('toast');
const closeIcon = document.getElementById('close-icon');
const acceptButton = document.getElementById('accept-button');
const closeButton = document.getElementById('close-button');

let toastTimerId; //to store the timer ID

function showToast(){
    toast.classList.add('show') //this makes the toast visible by applying the class show
    toastTimerId = setTimeout(()=>{
        hideToast();
    },5000);
}

showToastBtn.addEventListener('click', showToast );

function hideToast(){
    toast.classList.remove('show');
    clearTimeout(toastTimerId);
}

closeIcon.addEventListener('click',hideToast );
closeButton .addEventListener('click',hideToast );

acceptButton.addEventListener('click', ()=>{
    alert('Notification Accepted!');
    hideToast();
});
const cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    card.addEventListener('click', function(){
        if(this.classList.contains('expanded')){ /*this if statement is responsible for the collapse of an expanded card*/
            this.classList.remove('expanded')
        }
        else{
            cards.forEach((collapse)=>{
                collapse.classList.remove('expanded')
            }); //this collapse the expanded card while expanding current card
            this.classList.add('expanded'); //this expands the card
        }
    })
})


document.addEventListener('DOMContentLoaded', function(){    
   const filterButtons = document.querySelectorAll('.filter-button');
   const galleryItems = document.querySelectorAll('.gallery-item');
// Add click event to the filter buttons
filterButtons.forEach(button =>{
    button.addEventListener('click', function(){
        filterButtons.forEach(btn=>btn.classList.remove('active')); //remvoe active class from all buttons
        this.classList.add('active');

        //Get filter values
        const filterValue = this.getAttribute('data-filter');
        galleryItems.forEach(item=>{
            const category = item.getAttribute('data-category');
            if(filterValue === 'all' || filterValue === category){
                 item.classList.remove('hide');
            }
            else{
                item.classList.add('hide');
            }
    
        })
    })
  })
})
 
document.addEventListener("DOMContentLoaded", function(){

   const calculator = document.querySelector('.calculator');
   const inputArea = document.querySelector('.inputArea');
   let display;

    calculator.addEventListener("click", function(e){
        
        if(e.target.classList.contains('items')) {
            display = e.target.textContent.trim();
            console.log(display)
        }

    })

})
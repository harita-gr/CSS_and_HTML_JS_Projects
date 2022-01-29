const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach((btn) => {
    btn.addEventListener('click',() =>{
       //access parent nodes
       btn.parentNode.classList.toggle('active');
    })
})

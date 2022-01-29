// Returns an array containing all panel elements
const panels = document.querySelectorAll('.panel');

//1. Remove 'active' from all others
//2. Add class active on clicked element.  

panels.forEach((panel) =>{
    panel.addEventListener('click',() =>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})


function removeActiveClasses(){
    panels.forEach((panel) => {
      panel.classList.remove('active');
    })
}
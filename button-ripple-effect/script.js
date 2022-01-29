const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {

        //To get clicked position
        const x = e.clientX;
        const y = e.clientY;
        console.log(x,y);

        //To get button position - always fixed
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        console.log(buttonTop,buttonLeft);

        //To set the position wrt button
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        //create span element inside button
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
        this.append(circle);
        
        //cleanup
        setTimeout(() => circle.remove(),500);
    })
})
window.addEventListener('scroll',function(){
    var animate = document.querySelectorAll('.animate'); //animated class is added to all elements in the document.
    for(var i = 0; i < animate.length; i++){
        var windowHeight = window.innerHeight; //gets the height of the window. In this case, it is the whole screen.
        var animTop = animate[i].getBoundingClientRect().top; //gets the distance the element is from the top of the screen. In this case, it is
        var animPoint = 150;
         //150 pixels. This is the distance from the top of the screen. It is a percentage. So, it is 0.3%.
        if(animTop < windowHeight - animPoint){ //if the element is in
        animate[i].classList.add('active');
        }else{
            animate[i].classList.remove('active');
        }
    }
})
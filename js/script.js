let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
document.addEventListener('DOMContentLoaded', function() {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    if(prev && next){
        prev.addEventListener('click', function(){
            showSlides(slideIndex -= 1);
        });

        next.addEventListener('click', function(){
            showSlides(slideIndex += 1);
        });
    }
});

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; // No slides to show

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
}
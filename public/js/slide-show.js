// "use strict";
// //Setting constants to be used throughout the program.
// const $ = (selector) => document.querySelector(selector);

// const slides = document.querySelectorAll('.show');
// const prev = document.getElementById('Previous');
// const next = document.getElementById('Next');

// let index = 0

// // Setting the positions of the slides.
// slides.forEach((slide,index)=>{
//   slide.style.left=`${index*100}%`
// });

// // moves the slides over whenever it is called upon in the code.
// const moving = () =>{
//   slides.forEach((slide)=>{
//     slide.style.transform=`translateX(-${index*100}%)`;
//   });
// }

// // When the right button is pressed it will move to the next image.
// next.addEventListener('click',()=>{
//   if(index===slides.length-1) return index;
//   index++;
//   moving();
// });

// // When the left button is pressed it will move to the previous image.  
// prev.addEventListener('click',()=>{
//     if(index===0) return index;
//     index--;
//     moving();
//   });

// //Function to auto move to next slide.
//   const autoPlaySlide = () =>{
//     if(index===slides.length-1) index= -1;
//     index++;
//     moving();
//   }
  
// //Moves to the next slide every 4 seconds.
// setInterval(autoPlaySlide,4000);

let i;

let n;

let slides = document.getElementsByClassName("mySlides");

let dots = document.getElementsByClassName("dot");




let slideIndex = 0;

showSlides(slideIndex);




function plusSlides(n) {

  showSlides(slideIndex += n);

}





function currentSlide(n) {

  showSlides(slideIndex = n);

}




function showSlides(n) {




  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";

  }






  slides[slideIndex - 1].style.display = "block";





}




setInterval(function() { plusSlides(1) }, 4000);



"use strict";

const $ = (selector) => document.querySelector(selector);



const acceptTerms = ()=>{
    $("#terms").setAttribute("class", "hidden");
}

const toggleQuestion = (evt)=>{
    let answerDiv = evt.currentTarget.nextElementSibling;

    answerDiv.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", () => {

    $("#accept").addEventListener("click", acceptTerms);

});

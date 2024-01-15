const ham = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const featuresBtn = document.querySelector(".features-btn");
const hiidenFeaturesBtn = document.querySelector(".hidden-features");
const hiddenCompanyBtn = document.querySelector(".hidden-company");

ham.addEventListener("click", function(){
    header.classList.toggle("active");
})
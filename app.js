const ham = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const featuresBtn = document.querySelector(".features-btn");
const hiidenFeaturesBtn = document.querySelector(".hidden-features");
const companyBtn = document.querySelector(".company-btn");
const hiddenCompanyBtn = document.querySelector(".hidden-company");

ham.addEventListener("click", function(){
    header.classList.toggle("active");
})

featuresBtn.addEventListener("click", function() {
    hiddenFeaturesBtn.classList.toggle("active");
})

companyBtn.addEventListener("click", function() {
    hiddenCompanyBtn.classList.toggle("active");
})





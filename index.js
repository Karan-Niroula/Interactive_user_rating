let oneStar = document.querySelector(".rate1")
let twoStar = document.querySelector(".rate2")
let threeStar = document.querySelector(".rate3")
let fourStar = document.querySelector(".rate4")
let fiveStar = document.querySelector(".rate5")

let submit = document.getElementById("Submit")
let rateBoxContent = document.querySelector(".rateBoxContent")
let thankYouMessage = document.getElementById("thankYouMessage")
let userRating = document.querySelector(".userRating p")

let currentStar
let selectedRating 

let elements = [oneStar,twoStar,threeStar,fourStar,fiveStar]
elements.forEach(variable=>{variable.addEventListener('click',function(){
   selectedRating = variable.textContent
   if(currentStar){
   currentStar.style.backgroundColor= "#32323c"
   }
   currentStar = variable
   variable.style.backgroundColor= "hsl(217, 12%, 63%)"
   userRating.innerHTML=`You selected ${selectedRating} out of 5`
   userRating.style.color="hsl(25, 97%, 53%)"
})});


submit.addEventListener('click',function(){
   rateBoxContent.style.display="none"
   thankYouMessage.style.display="block"


})
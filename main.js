const btnToggle = document.querySelector(".toggle-btn");
console.log(btnToggle);

btnToggle.addEventListener("click", ()=>{
   document.getElementById("sidebar").classList.toggle("active");
});
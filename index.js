// const hamburger = document.querySelector(".hamburger")
// console.log("inside js")
// hamburger.addEventListener("click",()=>{
//     console.log("inside event listener")
//     document.querySelector(".navigation-bar").classList.add("visible")
//     document.querySelector(".navigation-bar").style.transition = "all 2s";
// })

// const cancel = document.querySelector(".fas")
// cancel.addEventListener("click",()=>{
//     console.log("inside event listener2")
//     document.querySelector(".navigation-bar").classList.remove("visible")
// })

const button = document.querySelector(".hamburger")
console.log(button)
const navBar = document.querySelector(".navigation-bar")

var height = navBar.clientHeight
var width = navBar.clientWidth

console.log(width+ " " +height)
navBar.style.height = height+'px'
navBar.style.width = width+'px'

button.addEventListener('click', ()=>{
    console.log("inside event list")
    
        
        navBar.style.height = height+'px';
        navBar.style.width = width + 'px';
        navBar.style.padding = '.5em';
        navBar.style.visibility='visible';
    
    
        
})

document.querySelector("i").addEventListener('click',()=>{
    
        //navBar.style.opacity = '0';
        navBar.style.height = '0';
        navBar.style.width = '0';
        navBar.style.padding = '0';
        navBar.style.visibility = 'hidden';
      
})
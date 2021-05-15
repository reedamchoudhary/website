window.onload= ()=>{
    setTimeout(()=>{
        document.querySelector(".title hr").style.width = "10%"},
        3000
    )
    setTimeout(()=>{
        document.querySelectorAll(".title .head h1")[0].style.transform = "scale(40)"
        document.querySelectorAll(".title .head h1")[1].style.transform = "scale(40)"
    },
        1000
    )

    setTimeout(()=>{
        
        document.querySelector(".title h2").style.visibility = "visible"
        document.querySelector(".title h2").style.transform = "translateY(0px)"
    
    },
        4000
    )
}
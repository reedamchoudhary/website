window.onload= ()=>{
    setTimeout(()=>{
        document.querySelector(".title hr").style.width = "10%"},
        3000
    )
    setTimeout(()=>{
        document.querySelectorAll(".title .head h1")[0].style.fontSize = "10rem"
        document.querySelectorAll(".title .head h1")[1].style.fontSize = "10rem"
    },
        1000
    )

    setTimeout(()=>{
        document.querySelector(".title h2").style.transform = "translateY(0px)"},
        4000
    )
}
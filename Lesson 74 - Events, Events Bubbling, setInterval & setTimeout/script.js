let btn = document.getElementById("btn")

// btn.addEventListener("click", ()=>{
//     alert("I was clicked, Yayy!!")
// })

// btn.addEventListener("click", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Yayy enjoy your click, Congratulations</b>"
// })

// btn.addEventListener("dblclick", ()=>{
//     // document.querySelector(".box").innerHTML = "<b>Yayy enjoy your click, Congratulations</b>"
// })

// btn.addEventListener("contextMenu", ()=>{
//     alert("dont hackus by rightclick please!!")
// })

btn.addEventListener("keydown", (e)=>{
    console.log(e.key)
})
console.clear()
function factorial(n) {
    let t = n
    for(let i = n - 1; i > 0; i--){
        t *= i
    } 
    return t
}

let searchbtn = document.getElementById("search")
searchbtn.addEventListener("click",function(){
let factext = document.getElementById("factorial")
document.getElementById("result").innerHTML = factext.value + " is " + factorial(factext.value)
})
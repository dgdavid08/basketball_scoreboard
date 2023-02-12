let countEl = document.getElementById("count-el")
let saveEl =document.getElementById("save-el")
let count = 0


function increment(){
    count = count +  1
    countEl.innerText = count
}

function save(){
    let getcount = count + "-"
    saveEl.innerText += getcount
    countEl.innertext = 0
    count = 0
    
}
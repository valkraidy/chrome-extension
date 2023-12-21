

let myLeads = ["qwert","asdfgh","mnbvcx","zcdgfb"]

const inputEl = document.getElementById("input-el") 
const inputBtn = document.getElementsById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for ( let i=0 ; i < myLeads.length ; i++ ){
    ulEl.textContent += myLeads[i]
}
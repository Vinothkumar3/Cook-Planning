let table=document.querySelector("table")
let color
table.addEventListener("click",(event)=>{
let events= event.target;
let tro=events.closest("tr")

  if(events.tagName=="TH") //check th not apply color hover
  {
    
    return
  }
  if(color!=undefined){
    color.classList.remove("active")
  }
color=tro
tro.classList.add("active")

table.addEventListener("dblclick",()=>{
  color.classList.remove("active") //double click  hover  bg color removes
})


})
 


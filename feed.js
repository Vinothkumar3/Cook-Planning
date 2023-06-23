
let formsubmit = (e)=>{
   // e.preventDefault()// prevent submit reload
      let submit=document.createElement("div")
      let main=document.getElementById("main")
       submit.id="alertDiv"
       submit.className="alertDiv"
      let aler=document.createTextNode("form submitted successful! 👍 😜")
       submit.append(aler)
       main.insertAdjacentElement("afterbegin",submit)
       setTimeout(() => 
       {
          let remove= document.getElementById("alertDiv")
          remove.remove() 
          remove.innerHTML=""
  
       },500);  
    
}


form.addEventListener("submit",formsubmit)



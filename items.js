
export function addFood(){

    let contentDiv=document.createElement("div")
    let main=document.getElementById("main")
     contentDiv.id="alertDiv"
     contentDiv.className="alertDiv"
    let alert=document.createTextNode("food order added successful! 👍 😜")
     contentDiv.append(alert)
     main.insertAdjacentElement("afterbegin",contentDiv)
     setTimeout(() => 
     {
        let remove= document.getElementById("alertDiv")
        remove.remove() 
        remove.innerHTML=""

     },500);  
  }
export function delFood(){

    let contentDiv=document.createElement("div")
    let main=document.getElementById("main")
    contentDiv.id="alertDiv"
    contentDiv.className="alertDiv"
     
    let alert=document.createTextNode("food order remove successful! 👍 😞")
     contentDiv.append(alert)
     main.insertAdjacentElement("afterbegin",contentDiv)
     setTimeout(() => 
     {
        let remove= document.getElementById("alertDiv")
        remove.remove() 
        remove.innerHTML=""
     },200);  
  }


import { addFood,delFood } from "./items.js";
let main=document.getElementById("main")
let input=document.getElementById("foodSearch")
let button=document.getElementById("search")
let ul=document.getElementById("foodContainer")
let img=document.getElementById("chief")
let par=document.createElement("p")
   par.className="countItem"

//dom contentLoaded
   document.addEventListener("DOMContentLoaded",()=>{
     let fetchFood=[...JSON.parse(localStorage.getItem("foodMenus"))] //fetchfoods menu from localstorage
     //fetchfoods iterate for each  
        fetchFood.forEach((item)=>{  
         let li=document.createElement("li")
         li.className="foodItem"
         li.id="foodItem"
         img.remove()
           let fragment=document.createDocumentFragment()//fragment using performance 
           let textNode=document.createTextNode(item.foodMenu)
           let icon=document.createElement("i")//li inside closing tag
           icon.className="fa-solid fa-xmark"
           //closing li element 
           icon.addEventListener("click",(event)=>{
            let fetchFoods=[...JSON.parse(localStorage.getItem("foodMenus"))]//array inside object values
             fetchFoods.forEach(item=>{
            let removes=event.target.closest("li")  //click event closet element   
             
            if(toString(item.foodMenu)==toString(removes.innerText)){
            fetchFoods.splice(fetchFoods.indexOf(item),1) //delete value from local storage
            
            if(removes.closest("ul").children.length==2)//delete li html
             {
             

               setTimeout(() => 
                {
                delFood() //delete.js
               
              }, 200);
             
              ul.append(img)
              li.remove()
              par.remove()
            
            } 
             else
             {
                
                   setTimeout(() => 
                     {
                    delFood()
                      }, 200);
                     
                li.remove();

                let delcount=document.querySelectorAll("li").length //li count
                 par.innerText=`you have ${delcount} item`
                 
               }
          } 
    
               localStorage.setItem("foodMenus",JSON.stringify(fetchFoods))//deleted li set localstorage    
         })
        }) //close icon add event LS
  
       li.append(textNode,icon)// //add LS
       fragment.append(li)  
       ul.append(fragment) 
       main.append(ul) 
       ul.prepend(par)
    
        let fetchItem=document.querySelectorAll("li").length //add li count dom contentloaded
        par.innerText=`you have ${fetchItem} item`  
       })
       })//close domcontent loaded
 

        // button click event

       let buttonClick=()=>{  //add li item save button click
       let li=document.createElement("li")
       li.className="foodItem"
       li.id="foodItem"
       let count=ul.querySelectorAll("li").length 
    
        let letter=/^[A-Z a-z ]+$/ 
        if( input.value.match(letter)){
        img.remove()
             let fragment=document.createDocumentFragment()
             let textNode=document.createTextNode(input.value)
             let icon=document.createElement("i")
             icon.className="fa-solid fa-xmark"

             icon.addEventListener("click",(event)=>{ //save after delete
              let fetchFoods=[...JSON.parse(localStorage.getItem("foodMenus"))]
              fetchFoods.forEach(item=>{
              let removes=event.target.closest("li")    
              if(item.foodMenu===removes.innerText)
              {  
                
              fetchFoods.splice(fetchFoods.indexOf(item),1)
              if(removes.closest("ul").children.length==2)
              {
                setTimeout(() => 
                {
                  delFood()
                  
                }, 200);
                
                li.remove()
                par.remove()
                
                  ul.append(img)
              
            
              }
                
                  else{  //delete after add
                   
                      setTimeout(() => 
                        {
                       delFood()
                         }, 200);          
                   li.remove();
                   let delcount=document.querySelectorAll("li").length
                    par.innerText=`you have ${delcount} item`
                    
                        }       
                } 
        
                localStorage.setItem("foodMenus",JSON.stringify(fetchFoods)) //set delete after localstorage 
                  
               })//foreach
              })//icon close


             
             localStorage.setItem("foodMenus",JSON.stringify
             ([...JSON.parse(localStorage.getItem("foodMenus")||"[]")  //local storage set input value
             ,{foodMenu:input.value},])) 

            li.append(textNode,icon) //html display li
            fragment.append(li)  
            ul.append(fragment) 
            main.append(ul)
           par.innerText=`you have ${count+1} item` //add html page li
           ul.prepend(par) 

           input.value=""
           setTimeout(() => 
           {
             addFood()
             
           }, 200);

         }

        }   
  button.addEventListener("click",buttonClick)

  
   input.addEventListener("keyup",e=>{ //input key event
    switch (e.key) {
    case "Enter":
      buttonClick()
      break;
  
    case "control z":
      input.value=""
      break;
  
  
    default:
      break;
    }

})

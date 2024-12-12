const input = document.querySelector("input")
const leftBox = document.querySelector(".todos")
const rightBox  = document.querySelector(".todos2")
const button = document.querySelector("button")
const error = document.querySelector(".error")


button.addEventListener("click",add)
let selected = ""
function add(e){
    e.preventDefault()
    if(input.value === ""){
        error.style.display= "flex"
        error.textContent="!Please write something"
    }
    else{
        error.style.display="none"

        let task = document.createElement("div")
        task.classList.add("task")
        task.setAttribute('draggable', 'true');
        leftBox.appendChild(task)

        let li = document.createElement("li")
        li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`
        task.appendChild(li)

        input.value = ""
        
        let icon = li.querySelector("i")
        icon.addEventListener("click",function(){
            li.remove()
        })

        
       task.addEventListener("dragstart",(e)=>{
        selected = task
       })

       rightBox.addEventListener("dragover",function(e){
        e.preventDefault()
       
       })
       rightBox.addEventListener("drop",function(){
        if(selected){
            rightBox.appendChild(selected)
            selected=null;
        }

       })


       leftBox.addEventListener("dragover",function(e){
        e.preventDefault()
       
       })
       leftBox.addEventListener("drop",function(){
        if(selected){
            leftBox.appendChild(selected)
            selected=null;
        }

       })

       


    }
}



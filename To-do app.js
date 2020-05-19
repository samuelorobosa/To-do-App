    let input=document.querySelector("input");
    let button=document.querySelector("button");
    let time=new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let format=`${months[time.getMonth()]}-${time.getDay()}-${time.getFullYear()}  ${time.getHours()}:${time.getMinutes()}`
    let ul=document.querySelector("ul");
    let database=[];

    button.addEventListener("click",()=>{
        if(input.value.length!==0){
        let todoText=document.createTextNode(input.value);
        let todoTime=document.createTextNode(format);
        let todoList=document.createElement("li");
        let todoCheck=document.createElement("input");
        todoCheck.type="checkbox";
        todoCheck.className="check";
        todoCheck.addEventListener("change", function(){this.parentElement.classList.add("done")})
        let todoDelete=document.createElement("button");

        let buttonText=document.createTextNode("Delete");
        todoDelete.type="button";
        todoDelete.className="delete";
        todoDelete.addEventListener("click", function(){this.parentElement.remove()});
        todoDelete.appendChild(buttonText);

        todoList.appendChild(todoText);
        todoList.appendChild(todoCheck);
        todoList.appendChild(todoTime);
        todoList.appendChild(todoDelete);
            database.push(todoList);
        ul.appendChild(todoList);   

        input.value="";
        }

    })




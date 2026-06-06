let inp = document.querySelector("input");
let btn = document.querySelector("button")
let main = document.querySelector(".main");
let sidediv = document.querySelector(".sideDiv");

inp.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        btn.click();
    }
});

// task complete box
 let content = document.createElement("div");
 content.classList.add("content");

 let sideDiv = document.createElement("div");
 sideDiv.classList.add("sideDiv");

 let h3 = document.createElement("h3");
 h3.textContent = "🐻Completed Day list🐻";

 let list = document.createElement("ul");

 sideDiv.appendChild(h3);
 sideDiv.appendChild(list);


 content.appendChild(sideDiv);
 document.body.appendChild(content);




btn.addEventListener("click" , function(dets){
     dets.preventDefault();
     let val = inp.value.trim();
 
let task = document.createElement("div");
    task.classList.add("task");

let tick = document.createElement("input");
    tick.type = "checkbox"
    tick.classList.add("tick");

let box = document.createElement("div");
    box.classList.add("box");
    box.placeholder = "Add your task";
    box.innerText = val;

 task.appendChild(tick);
 task.appendChild(box);

 main.appendChild(task);

 if(val === ""){
     alert("Please! Enter the Task");
     return;
 }

 inp.value = "";



// checkbox event
 tick.addEventListener("change", function () {

    let progress = document.querySelector(".progress");

    progress.style.width = "0%";

setInterval(function () {
    let totalTasks = document.querySelectorAll(".tick").length;
    let completedTasks = document.querySelectorAll(".tick:checked").length;

    let percent = 0;

    if (totalTasks > 0) {
        percent = (completedTasks / totalTasks) * 100;
    }

    progress.style.width = percent + "%";

}, 100);


       if(this.checked){
        
        let item = document.createElement("li");
        item.textContent = val;
        sideDiv.appendChild(list);

        list.appendChild(item);

       }else{
        let items = list.querySelectorAll("li");

            items.forEach((li) => {
                if (li.textContent === val) {
                    li.remove();
                  }
                });
            }

        
        
        //inp.value = "";
});


  });

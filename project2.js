

let toDoList = [
    
    {task: "Wake Up",id:1},
    {task: "Eat",id:2},
    {task: "Code",id:3},
    {task: "Sleep",id:4},
    
] 

const body = $("body");

const container = $("#container");

const tasks = $("<div></div>");
tasks.appendTo(container);


const completed = $("<div></div>");
completed.appendTo(container);

const header = $("<h1></h1>");
header.text("Tasks")
header.appendTo(tasks)

const header1 = $("<h1></h1>");
header1.text("Completed")
header1.appendTo(completed);

tasks.addClass("tasks");
completed.addClass("completed")


const unorderedList = $("<ul></ul>");
unorderedList.appendTo(body);

const input = $("<input>");
input.appendTo(body);

const inputDate = $("<input type = date></input");
inputDate.appendTo(body);

const button = $("<button></button>")
button.text("add");
button.appendTo(body);





const toDo = () => {
toDoList.forEach((element,i)=>{

let listItem = $("<li></li>")
const newbutton = $("<button>Delete</button>")
const updatebutton = $("<button>Update</button>")
const completedbutton = $("<button>Completed</button>")
const inputDate = $("<input type = date></input");


newbutton.on("click",()=>{

    listItem.remove();
})

updatebutton.on("click",()=>{  

listItem.text(input.val());
newbutton.appendTo(listItem);
updatebutton.appendTo(listItem);

newbutton.on("click",()=>{

    listItem.remove();
})

updatebutton.on("click" ,()=>{

    listItem.text(input.val());

})

completedbutton.on("click",()=>{

    //hide pages and move to completed page or move to array completed
    // we can make if (completed button);

})
inputDate.on( "onselect",()=>{

    listItem.text(inputDate.val());
})



})


listItem.text(element.task );
listItem.appendTo(unorderedList);
inputDate.appendTo(listItem);
newbutton.appendTo(listItem);
updatebutton.appendTo(listItem);
completedbutton.appendTo(listItem);


})

}
toDo();

const addtoList = () => {

toDoList = [];
toDoList.push( { task: input.val()});
toDo()
}

button.on("click" , addtoList);





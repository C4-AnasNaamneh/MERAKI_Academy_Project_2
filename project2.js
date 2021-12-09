

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

const anchor = $("<a href=#></a>");
anchor.text("Tasks")
anchor.appendTo(tasks)

const anchor1 = $("<a href =# ></a>");
anchor1.text("Completed")
anchor1.appendTo(completed);


tasks.addClass("tasks");
completed.addClass("completed");

anchor.addClass("anchor");
anchor1.addClass("anchor");

const divContainer = $("<div></div>");
divContainer.addClass("divContainer")


divContainer.appendTo(body);


const unorderedList = $("<ul></ul>");
unorderedList.appendTo(divContainer);

const input = $("<input>");
input.appendTo(divContainer);

const inputDate = $("<input type = date></input");
inputDate.appendTo(divContainer);

const button = $("<button></button>")
button.text("add");
button.appendTo(divContainer);




const toDo = () => {
toDoList.forEach((element,i)=>{


let listItem = $("<li></li>")
const newbutton = $("<button>Delete</button>")
const updatebutton = $("<button>Update</button>")
const completedbutton = $("<button>Completed</button>")
const inputDate = $("<input type = date></input");
const tasks = $("tasks");


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

tasks.on("click" ,()=>{

    divContainer.hide();


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





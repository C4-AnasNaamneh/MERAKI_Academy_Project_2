

let toDoList = [
    
    {task: "Wake Up",id:1},
    {task: "Eat",id:2},
    {task: "Code",id:3},
    {task: "Sleep",id:4},
] 





const body = $("body");

const unorderedList = $("<ul></ul>");
unorderedList.appendTo(body);

const input = $("<input>");
input.appendTo(body);

const button = $("<button></button>")
button.text("add");
button.appendTo(body);


const toDo = () => {
toDoList.forEach((element,i)=>{
let listItem = $("<li></li>")
const newbutton = $("<button>Delete</button>")
const updatebutton = $("<button>Update</button>")


newbutton.on("click",()=>{

    listItem.remove();
})

updatebutton.on("click",()=>{

listItem.text(input.vl());


})



listItem.text(element.task);
listItem.appendTo(unorderedList);
newbutton.appendTo(listItem);
updatebutton.appendTo(listItem);

})

}
toDo();

const addtoList = () => {

toDoList = [];
toDoList.push( { task: input.val()});
toDo()
}

button.on("click" , addtoList);
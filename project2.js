let toDoList = [
    
    /*  {task: "Wake Up",id: "completed"},
      {task: "Eat",id:2},
      {task: "Code",id:3},
      {task: "Sleep",id:4},*/
      
  ] 
  
  const body = $("body");
  
  const container = $("#container");
  
const title = $("<div></div>")

title.addClass("title");
title.appendTo(container)

  const header = $("<h1>Schedule your day</h1>");

  header.addClass("h1")
  header.appendTo(title)

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
  unorderedList.addClass("unorderedList");
  unorderedList.appendTo(divContainer);
  
  
  const input = $(`<input placeholder="Add New Task...">`);
  input.appendTo(divContainer);
  
  const inputDate = $("<input  type = date></input");
  inputDate.addClass("inputDate");
  inputDate.appendTo(divContainer);
  
  const addbutton = $("<button></button>");
  addbutton.text("add");
  addbutton.addClass("addbutton")
  addbutton.appendTo(divContainer);
  
  
  
  const toDo = () => {

   



  toDoList.forEach((element,i)=>{
  
  
  let listItem = $("<li></li>");
  listItem.addClass("listItem");
  const deletebutton = $("<button>Delete</button>");
  const updatebutton = $("<button>Update</button>");
  const completedbutton = $("<button>Completed</button>");
  //const inputDate = $("<input type = date></input");
  
  deletebutton.addClass("deletebutton");
  updatebutton.addClass("updatebutton");
  completedbutton.addClass("completedbutton");




  
  deletebutton.on("click",()=>{
  
      listItem.remove();
  })
  
  
  updatebutton.on("click",()=>{  
  
  listItem.text(input.val());
  deletebutton.appendTo(listItem);
  updatebutton.appendTo(listItem);
  completedbutton.appendTo(listItem);
  


  deletebutton.on("click",()=>{
  
      listItem.remove();
  })
  
  updatebutton.on("click" ,()=>{
  
      listItem.text(input.val());
        
  
  })
  
  
  completedbutton.on("click",()=>{
  
       //hide pages and move to completed page or move to array completed
      // we can make if (completed button);
     /* toDoList.forEach((element)=> {
          if () {
          }
      })*/
  
      
  })
  inputDate.on("change",()=>{
  
      listItem.text(inputDate.val());
  })
  
  tasks.on("click" ,()=>{

 
  })
  
  
  })
  
  
  listItem.text(element.task );
  listItem.appendTo(unorderedList);
  inputDate.appendTo(divContainer);
  inputDate.appendTo(listItem);
  deletebutton.appendTo(listItem);
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
  
  addbutton.on("click" , addtoList);
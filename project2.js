let toDoList = [];
const body = $("body");

const container = $("#container");

const title = $("<div></div>");

title.addClass("title");
title.appendTo(container);

const header = $("<h1>Schedule your day</h1>");

header.addClass("h1");
header.appendTo(title);

const tasks = $("<div></div>");
tasks.appendTo(container);

const completed = $("<div></div>");
completed.appendTo(container);

const anchor = $("<a href=#></a>");
anchor.text("Tasks");
anchor.appendTo(tasks);

const anchor1 = $("<a href =# ></a>");
anchor1.text("Completed");
anchor1.appendTo(completed);

tasks.addClass("tasks");
completed.addClass("completed");

anchor.addClass("anchor");
anchor1.addClass("anchor");

const divContainer = $("<div></div>");
divContainer.addClass("divContainer");

const inputbuttondiv = $("<div></div>");
inputbuttondiv.addClass("inputbuttondiv");
inputbuttondiv.appendTo(body);

divContainer.appendTo(body);

const unorderedList = $("<ul></ul>");
unorderedList.addClass("unorderedList");
unorderedList.appendTo(divContainer);

const input = $(`<input placeholder="Add New Task...">`);
input.appendTo(inputbuttondiv);


const inputDate = $("<input  type = date></input");
inputDate.addClass("inputDate");
inputDate.appendTo(inputbuttondiv);

const addbutton = $("<button></button>");
addbutton.text("add");
addbutton.addClass("addbutton");
addbutton.appendTo(inputbuttondiv);

const toDo = () => {
  unorderedList.text("");

  toDoList.forEach((element, i) => {
    let listItem = $("<li></li>");
    listItem.addClass("listItem");
    const deletebutton = $("<button>Delete</button>");
    const updatebutton = $("<button>Update</button>");
    const completedbutton = $("<button>Completed</button>");
    //const inputDate = $("<input type = date></input");
    listItem.text(element.task);
    listItem.appendTo(unorderedList);
    // inputDate.appendTo(inputbuttondiv);
    // inputDate.appendTo(listItem);
    deletebutton.appendTo(listItem);
    updatebutton.appendTo(listItem);
    completedbutton.appendTo(listItem);

    deletebutton.addClass("deletebutton");
    updatebutton.addClass("updatebutton");
    completedbutton.addClass("completedbutton");

    deletebutton.on("click", () => {
      listItem.remove();
    });

    updatebutton.on("click", () => {
      listItem.text(input.val());
      deletebutton.appendTo(listItem);
      updatebutton.appendTo(listItem);
      completedbutton.appendTo(listItem);

      deletebutton.on("click", () => {
        listItem.remove();
      });

      updatebutton.on("click", () => {
        listItem.text(input.val());
      });
      //hide pages and move to completed page or move to array completed
      // we can make if (completed button);
    });

    tasks.on("click", () => {
      inputbuttondiv.hide();
    });

    completedbutton.on("click", () => {
      //listItem.text(input.val())
      listItem.text(input.val());
    });

    completed.on("click", () => {
      if (completed) {
      }
    });

    inputDate.on("change", () => {
      listItem.text(inputDate.val());
    });
  });
};
toDo();

const addtoList = () => {
  //toDoList = [];
  toDoList.push({ task: input.val() });
  toDo();
};

addbutton.on("click", addtoList);

/*let completedList = [
    
    {task: input.val(),id: "completed"},
    {task: input.val(),id: "completed"},
    {task: input.val(),id: "completed"},
    {task: input.val(),id: "completed"},

 
 ]

  */

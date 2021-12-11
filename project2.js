let toDoList = [];
let storage = JSON.parse(localStorage.getItem("toDoList"));
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
  // toDoList =[]
  unorderedList.text("");
  toDoList.forEach((element, i) => {
    let listItem = $("<li></li>");
    listItem.addClass("listItem");
    const deletebutton = $("<button>Delete</button>");
    const updatebutton = $("<button>Update</button>");
    const completedbutton = $("<button>Completed</button>");

    const divDate = $(`<div>${element.date}</div>`);

    listItem.text(element.task);
    listItem.appendTo(unorderedList);

    divDate.appendTo(listItem);

    deletebutton.appendTo(listItem);
    updatebutton.appendTo(listItem);
    completedbutton.appendTo(listItem);

    deletebutton.addClass("deletebutton");
    updatebutton.addClass("updatebutton");
    completedbutton.addClass("completedbutton");



      deletebutton.on("click", () => {
      listItem.remove();

      storage.forEach((element, i) => {

        console.log(storage);

        const remove = toDoList.pop();

        const myJSON = JSON.stringify(toDoList);

        JSON.parse(localStorage.getItem("toDoList"));


        localStorage.setItem("toDoList", myJSON);
      });
    });

    updatebutton.on("click", () => {
      listItem.text(input.val());

      storage.forEach((element, i) => {


       // const update = toDoList.splice(i, 1);

       //storage.push(element);

        //const myJSON = JSON.stringify(update);

        //JSON.parse(localStorage.getItem("toDoList"));

        //console.log(JSON.parse(localStorage.getItem("toDoList")));

       // localStorage.setItem("toDoList", myJSON);
      });

      deletebutton.appendTo(listItem);
      updatebutton.appendTo(listItem);
      divDate.appendTo(listItem);
      completedbutton.appendTo(listItem);

      deletebutton.on("click", () => {
        listItem.remove();
      });

      updatebutton.on("click", () => {
        listItem.text(input.val());
      });

      completedbutton.on("click", () => {
        element.isCompleted = true;
        console.log(element);
        //listItem.text(false);
        listItem.hide(); //hide completed  from here
      });
    });

    tasks.on("click", () => {
      element.isCompleted = false;
      console.log(element);

      inputbuttondiv.hide();
    });

    completedbutton.on("click", () => {
      element.isCompleted = true;
      console.log(element);
      //listItem.text(false);
      listItem.hide(); //hide completed  from here
    });

    completed.on("click", () => {
      toDoList.forEach((element, i) => {
        if (element.isCompleted) {
          // const newDiv = $("<div></div>");
          // newDiv.appendTo(body);

          listItem.show();
          // listItem.text(element.isCompleted);

          console.log(element);
        }
      });
      listItem.text(element.task);
    });

   
  });
};
toDo();

const addtoList = () => {
  // toDoList = [];
  toDoList.push({
    task: input.val(),
    isCompleted: false,
    date: inputDate.val(),
  });
  toDo();

  // const arr = [];
  const myJSON = JSON.stringify(toDoList);
  localStorage.setItem("toDoList", myJSON);

  console.log(JSON.parse(localStorage.getItem("toDoList")));
};

addbutton.on("click", addtoList);


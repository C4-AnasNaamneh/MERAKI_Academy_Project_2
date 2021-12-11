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
//const inputDate = $(`<i class='far fa-calendar'  type = 'date'></i>`)

inputDate.addClass("inputDate");
inputDate.appendTo(inputbuttondiv);





//const addbutton = $("<button></button>");
const addbutton = $(`<i class="fas fa-plus-circle"></i>`)
addbutton.text("");
addbutton.addClass("addbutton");
addbutton.appendTo(inputbuttondiv);


const RegisterDiv = $("<div></div>");
RegisterDiv.addClass("RegisterDiv")
RegisterDiv.appendTo(body);


const greeting = $(`<h1>Welcome to Our App</h1>`);
greeting.addClass("greeting")
greeting.appendTo(RegisterDiv);

const Usernameinput = $(`<br><input placeholder="Enter your Username" type = "text">`);
Usernameinput.addClass("Usernameinput");
Usernameinput.appendTo(RegisterDiv);

const Registerinput = $(`<br><input placeholder="Enter your Email" type = "email">`);
Registerinput.addClass("Registerinput")
Registerinput.appendTo(RegisterDiv);

const rpasswordinput = $(`<br><input placeholder="Enter your Password" type = "password">`);
rpasswordinput.addClass("rpasswordinput")
rpasswordinput.appendTo(RegisterDiv); 

const Registerbutton = $(`<br><button>Register</button>`);
Registerbutton.addClass("Registerbutton")
Registerbutton.appendTo(RegisterDiv)

 const header2 = $(`<h3>Already have account?</h3>`);

 header2.addClass("header2")
 header2.appendTo(RegisterDiv);


 const loginAnchor = $("<a href =# >Login</a>");

 loginAnchor.addClass("loginAnchor")

 loginAnchor.appendTo(header2);


const loginDiv = $("<div></div>")
loginDiv.addClass("loginDiv")
loginDiv.appendTo(body)

const logininput = $(`<br><input placeholder="Enter your Email" type = "email">`);
logininput.addClass("logininput")
logininput.appendTo(loginDiv);

const passwordinput = $(`<br><input placeholder="Enter your Password" type = "password">`);
passwordinput.addClass("passwordinput")
passwordinput.appendTo(loginDiv); 

const loginbutton = $(`<br><button>Login</button>`);
loginbutton.addClass("loginbutton")
loginbutton.appendTo(loginDiv)


const logout = $(`<div></div>`);
logout.addClass("logoutAnchor");
logout.appendTo(container);

const logoutAnchor = $("<a href =# >Logout</a>");
logoutAnchor.addClass("logoutAnchor");
logoutAnchor.appendTo(logout)





inputbuttondiv.hide();
divContainer.hide();
loginDiv.hide();
logoutAnchor.hide();



Registerbutton.on ("click" , (()=>{

  inputbuttondiv.show();
divContainer.show();
RegisterDiv.hide();
logoutAnchor.show();


}))


loginAnchor.on("click",()=>{

  
 RegisterDiv.hide();
  loginDiv.show();


})

loginbutton.on ("click" , (()=>{

  inputbuttondiv.show();
divContainer.show();
loginDiv.hide();
logoutAnchor.show();


}))

logoutAnchor.on ("click" , (()=>{


  inputbuttondiv.hide();
  divContainer.hide();
  loginDiv.hide();
  logoutAnchor.hide();
  RegisterDiv.show();
  

}))



const toDo = () => {
  // toDoList =[]
  unorderedList.text("");
  toDoList.forEach((element, i) => {
    let listItem = $("<li></li>");
    listItem.addClass("listItem");
    const deletebutton = $(`<i class="fas fa-trash-alt"></i>`);
    const updatebutton = $(`<i class="fas fa-edit"></i>`);
    const completedbutton = $(`<i class="fa fa-check" aria-hidden="true"></i>`);

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
      // localStorage.removeItem()
      //let index = 0;
      // const remove = storage.splice(index, 1);
      // const myJSON = JSON.stringify(remove);
      // localStorage.

      for (let i = 0; i < storage.length; i++) {
        const remove = storage.splice(i, 1);
        const myJSON = JSON.stringify(remove);

        localStorage.setItem("toDoList", myJSON);
      }

      //       storage.forEach((element, i) => {

      //         //console.log(storage);

      //         //

      //         const remove ;

      //
      // //
      //         JSON.parse(localStorage.getItem("toDoList"));

      //       });
    });

    updatebutton.on("click", () => {
      listItem.text(input.val());

      //storage.push({val:input.val()});
      //console.log(storage)



     // storage.forEach((element, i) => {
        // const update = toDoList.splice(i, 1);
        //storage.push(element);
        //const myJSON = JSON.stringify(update);
        //JSON.parse(localStorage.getItem("toDoList"));
        //console.log(JSON.parse(localStorage.getItem("toDoList")));
        // localStorage.setItem("toDoList", myJSON);
     // });

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

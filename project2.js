//assign array
let toDos = [];
//local storage
const localStorage = window.localStorage;
//let storage = JSON.parse(localStorage.getItem("toDosArray"));
//selecting body
const body = $("body");

//......... ............navbar..........................//
//selecting div with id container
const container = $("#container");
//create div
const title = $("<div></div>");
//add class
title.addClass("title");
//append div to container div
title.appendTo(container);
//creating header
const header = $("<h1>Schedule your day</h1>");
//add class 
header.addClass("h1");
//append header to div
header.appendTo(title);
//create div
const tasksDiv = $("<div></div>");
//append div to container div
tasksDiv.appendTo(container);
//create div
const completedDiv = $("<div></div>");
//append div to container div
completedDiv.appendTo(container);
//creating anchortag
const tasksAnchor = $("<a href=#></a>");
//name anchor
tasksAnchor.text("Tasks");
//append anchor to div
tasksAnchor.appendTo(tasksDiv);
//creating anchortag
const completedAnchor = $("<a href =# ></a>");
//name anchor
completedAnchor.text("Completed");
//append anchor to div
completedAnchor.appendTo(completedDiv);
//add class
tasksDiv.addClass("tasksDiv");
//add class
completedDiv.addClass("completedDiv");
//add class 
tasksAnchor.addClass("anchor");
// add class
completedAnchor.addClass("anchor");
//creating anchortag for toggle
const toggle = $(`<a href = "#">Dark/Light </a>`);
//add class
toggle.addClass("mode");
//append anchor to container div
toggle.appendTo(container);
//creating div
const divContainer = $("<div></div>");
//add class
divContainer.addClass("divContainer");
//creating div
const inputButtonDiv = $("<div></div>");
//add class
inputButtonDiv.addClass("inputButtonDiv");
//append div to body
inputButtonDiv.appendTo(body);
//append div to body
divContainer.appendTo(body);
//create unordered list
const unorderedList = $("<ul></ul>");
//add class
unorderedList.addClass("unorderedList");
//append unordered list to div
unorderedList.appendTo(divContainer);
// Adding input for new task 
const input = $(`<input placeholder="Add New Task...">`);
//append input to div
input.appendTo(inputButtonDiv);
//adding input for date
const inputDate = $("<input  type = date></input");
//add class
inputDate.addClass("inputDate");
//append date input to div
inputDate.appendTo(inputButtonDiv);
// creating add button
const addButton = $(`<i class="fas fa-plus-circle"></i>`);

addButton.text("");
//add class
addButton.addClass("addButton");
//append button to div
addButton.appendTo(inputButtonDiv);
// creating div
const registerDiv = $("<div></div>");
// add class
registerDiv.addClass("registerDiv");
// append div to body
registerDiv.appendTo(body);
// creating image
const image = $(`<img>`);
// add class
image.addClass("image");
// image source
image.attr(
  "src",
  "https://www.heropa.com/wp-content/uploads//2021/03/Secure-login-bro.svg"
);
// append image to div
image.appendTo(registerDiv);
// creating header for welcoming
const greeting = $(`<h1>Welcome to Our App</h1>`);
//add class
greeting.addClass("greeting");
//append header to div
greeting.appendTo(registerDiv);
//creating input
const usernameInput = $(
  `<br><input placeholder="Enter your username" type = "text">`
);
//add class
usernameInput.addClass("usernameInput");
//append input to div
usernameInput.appendTo(registerDiv);
//creating input
const registerInput = $(
  `<br><input placeholder="Enter your Email" type = "email">`
);
//add class
registerInput.addClass("registerInput");
//append input to div
registerInput.appendTo(registerDiv);
//creating input
const rpasswordInput = $(
  `<br><input placeholder="Enter your Password" type = "password">`
);
//add class
rpasswordInput.addClass("rpasswordInput");
//append input to div
rpasswordInput.appendTo(registerDiv);
//creating button
const registerButton = $(`<br><button>Register</button>`);
//add class
registerButton.addClass("registerButton");
//append button to div
registerButton.appendTo(registerDiv);
//creating header
const header2 = $(`<h3>Already have account?</h3>`);
//add class
header2.addClass("header2");
//append header to div
header2.appendTo(registerDiv);
//creating anchortag
const loginAnchor = $("<a href =# >Login</a>");
//add class
loginAnchor.addClass("loginAnchor");
//append anchor to header
loginAnchor.appendTo(header2);
//creating div
const loginDiv = $("<div></div>");
//add class
loginDiv.addClass("loginDiv");
//append div to body 
loginDiv.appendTo(body);
//creating image
const image2 = $(`<img>`);
//add class
image2.addClass("image");
//image2 source
image2.attr(
  "src",
  "https://www.heropa.com/wp-content/uploads//2021/03/Secure-login-bro.svg"
);
//append image2 to div
image2.appendTo(loginDiv);
//creating input
const loginInput = $(
  `<br><input placeholder="Enter your Email" type = "email">`
);
//add class
loginInput.addClass("loginInput");
//append input to div
loginInput.appendTo(loginDiv);
//creating input
const passwordInput = $(
  `<br><input placeholder="Enter your Password" type = "password">`
);
//add class
passwordInput.addClass("passwordInput");
//append input to div 
passwordInput.appendTo(loginDiv);
//creating button
const loginButton = $(`<br><button>Login</button>`);
//add class
loginButton.addClass("loginButton");
//append button to div
loginButton.appendTo(loginDiv);
//creating div
const logoutDiv = $(`<div></div>`);
//add class
logoutDiv.addClass("logout");
//append div to container div
logoutDiv.appendTo(container);
//creating anchortag
const logoutAnchor = $("<a href =# >Logout</a>");
//add class
logoutAnchor.addClass("logout");
//append anchor to div
logoutAnchor.appendTo(logoutDiv);

//hide divs that hold input ,inputdate,add button,unordered list and logout anchor from main page 
inputButtonDiv.hide();
divContainer.hide();
loginDiv.hide();
logoutAnchor.hide();
//on click
registerButton.on("click", () => {
  inputButtonDiv.show();
  divContainer.show();
  registerDiv.hide();
  logoutAnchor.show();
});
//on click
loginAnchor.on("click", () => {
  registerDiv.hide();
  loginDiv.show();
});
//on click
loginButton.on("click", () => {
  inputButtonDiv.show();
  divContainer.show();
  loginDiv.hide();
  logoutAnchor.show();
});
//on click
logoutAnchor.on("click", () => {
  inputButtonDiv.hide();
  divContainer.hide();
  loginDiv.hide();
  logoutAnchor.hide();
  registerDiv.show();
});

const toDo = () => {
  toDos = JSON.parse(localStorage.getItem("toDosArray"));

  toDos.forEach((element, i) => {
    let listItem = $("<li></li>");
    listItem.addClass("listItem");
    const deleteButton = $(`<i class="fas fa-trash-alt"></i>`);
    const updateButton = $(`<i class="fas fa-edit"></i>`);
    const completedButton = $(`<i class="fa fa-check" aria-hidden="true"></i>`);
    const divDate = $(`<div>${element.date}</div>`);
  
    const pendingList = $(`<a href ="#">Pending</a>`);
    pendingList.addClass("pendingList");
    pendingList.appendTo(listItem);

    const completedList = $(`<a href ="#">Completed</a>`);
    completedList.addClass("completedList");
    completedList.appendTo(listItem);

    listItem.text(element.task);
    listItem.appendTo(unorderedList);

    divDate.appendTo(listItem);

    deleteButton.appendTo(listItem);
    updateButton.appendTo(listItem);
    completedButton.appendTo(listItem);

    deleteButton.addClass("deleteButton");
    updateButton.addClass("updateButton");
    completedButton.addClass("completedButton");

    deleteButton.on("click", () => {
      toDos.forEach((todo, i) => {
        if (todo === element) {
          toDos.splice(i, 1);
        }
        console.log(toDos[i]);
      });
      localStorage.setItem("toDosArray", JSON.stringify(toDos));

      listItem.remove();

      // for (let i = 0; i < storage.length; i++) {
      //   const remove = storage.splice(i, 1);
      //   const myJSON = JSON.stringify(remove);

      //   localStorage.setItem("toDosArray", toDos);
      // }
    });

    updateButton.on("click", () => {
      //listItem.text(input.val());
      //toDos =[];

      toDos[i] = {
        task: input.val(),
        isCompleted: false,
        date: inputDate.val(),
      };

      console.log(toDos[i]);
      
      localStorage.setItem("toDosArray", JSON.stringify(toDos));

     //  addtoList();
    //toDo()

//    toDos.forEach((todo,i)=>{

//    if (element === todo) {

//     toDos[i] = input.val();
// console.log(toDos[i]);
//    }
//    })


//       console.log(toDos);

//      toDo();

      // deleteButton.appendTo(listItem);
      // updateButton.appendTo(listItem);
      // divDate.appendTo(listItem);
      // completedButton.appendTo(listItem);

      // deleteButton.on("click", () => {
      //   listItem.remove();
      // });

      // updateButton.on("click", () => {
      //   listItem.text(input.val());
      //   divDate.appendTo(listItem);
      //   localStorage.setItem("toDosArray", JSON.stringify(toDos));
      // });

      // completedButton.on("click", () => {
      //   element.isCompleted = true;
      //   console.log(element);

      //   listItem.hide();
      //   localStorage.setItem("toDosArray", JSON.stringify(toDos));
      // });
    });

    tasksDiv.on("click", () => {
      element.isCompleted = false;
      if (element.isCompleted !== true) {
        console.log(element);
        inputButtonDiv.hide();

        pendingList.appendTo(listItem);
        pendingList.show();
      }


      // completedDiv.on("click", () => {
      //   let answer = toDos.filter((element, i) => {
      //     return element.isCompleted === true;
      //   });

      //   listItem.show();

      //   answer.forEach((element, i) => {
      //     toDos = [];
      //     const value = element.task;
      //     const p = $(`<p>${value}</p>`);
      //     p.addClass(p);
      //     p.appendTo(divContainer);
      //   });
      //   localStorage.setItem("toDosArray", JSON.stringify(toDos));
      // });
    });

    pendingList.on("click", () => {
      inputButtonDiv.show();
      pendingList.hide();
    });

    // completedList.on("click", () => {
    //   inputButtonDiv.show();
    //   completedList.hide();
    // });

    completedButton.on("click", () => {
      element.isCompleted = true;

      console.log(element);
      if ((element.isCompleted = true)) {
        listItem.hide();
      }
      localStorage.setItem("toDosArray", JSON.stringify(toDos));

    });

    completedDiv.on("click", () => {
      let answer = toDos.filter((element, i) => {
        return element.isCompleted === true;
      });
      completedList.appendTo(listItem);

      // listItem.show();
      // pendingList.hide();
      // completedList.show();

      answer.forEach((element, i) => {
        toDos = [];
        const value = element.task;
        const p = $(`<p>${value}</p>`);
        p.addClass(p);
        p.appendTo(divContainer);
      });
      localStorage.setItem("toDosArray", JSON.stringify(toDos));
    });
  });
};
toDo();

const addtoList = () => {
  // toDos = [];
  toDos.push({
    task: input.val(),
    isCompleted: false,
    date: inputDate.val(),
  });

  localStorage.setItem("toDosArray", JSON.stringify(toDos));
  unorderedList.text("");
  toDo();
  // console.log("test");
  //   console.log(toDosArray);

  // toDos= JSON.parse(localStorage.getItem("toDosArray"));
};

addButton.on("click", addtoList);

//Toggle between Dark and Light Mode

toggle.on("click", () => {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  myFunction();
});

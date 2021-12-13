let toDos = [];
const localStorage = window.localStorage;
//let storage = JSON.parse(localStorage.getItem("toDosArray"));
const body = $("body");

const container = $("#container");

const title = $("<div></div>");

title.addClass("title");
title.appendTo(container);

const header = $("<h1>Schedule your day</h1>");

header.addClass("h1");
header.appendTo(title);

const tasksDiv = $("<div></div>");
tasksDiv.appendTo(container);

const completedDiv = $("<div></div>");
completedDiv.appendTo(container);

const tasksAnchor = $("<a href=#></a>");
tasksAnchor.text("Tasks");
tasksAnchor.appendTo(tasksDiv);

const completedAnchor = $("<a href =# ></a>");
completedAnchor.text("Completed");
completedAnchor.appendTo(completedDiv);

tasksDiv.addClass("tasksDiv");
completedDiv.addClass("completedDiv");

tasksAnchor.addClass("anchor");
completedAnchor.addClass("anchor");

const toggle = $(`<a href = "#">Dark/Light </a>`);
toggle.addClass("mode");
toggle.appendTo(container);

const divContainer = $("<div></div>");
divContainer.addClass("divContainer");

const inputButtonDiv = $("<div></div>");
inputButtonDiv.addClass("inputButtonDiv");
inputButtonDiv.appendTo(body);

divContainer.appendTo(body);

const unorderedList = $("<ul></ul>");
unorderedList.addClass("unorderedList");
unorderedList.appendTo(divContainer);

const input = $(`<input placeholder="Add New Task...">`);
input.appendTo(inputButtonDiv);




const inputDate = $("<input  type = date></input");

inputDate.addClass("inputDate");
inputDate.appendTo(inputButtonDiv);

const addButton = $(`<i class="fas fa-plus-circle"></i>`);
addButton.text("");
addButton.addClass("addButton");
addButton.appendTo(inputButtonDiv);

const registerDiv = $("<div></div>");
registerDiv.addClass("registerDiv");
registerDiv.appendTo(body);

const image = $(`<img>`);
image.addClass("image");
image.attr(
  "src",
  "https://www.heropa.com/wp-content/uploads//2021/03/Secure-login-bro.svg"
);
image.appendTo(registerDiv);

const greeting = $(`<h1>Welcome to Our App</h1>`);
greeting.addClass("greeting");
greeting.appendTo(registerDiv);

const UsernameInput = $(
  `<br><input placeholder="Enter your Username" type = "text">`
);
UsernameInput.addClass("UsernameInput");
UsernameInput.appendTo(registerDiv);

const registerInput = $(
  `<br><input placeholder="Enter your Email" type = "email">`
);
registerInput.addClass("registerInput");
registerInput.appendTo(registerDiv);

const rpasswordInput = $(
  `<br><input placeholder="Enter your Password" type = "password">`
);
rpasswordInput.addClass("rpasswordInput");
rpasswordInput.appendTo(registerDiv);

const registerButton = $(`<br><button>Register</button>`);
registerButton.addClass("registerButton");
registerButton.appendTo(registerDiv);

const header2 = $(`<h3>Already have account?</h3>`);

header2.addClass("header2");
header2.appendTo(registerDiv);

const loginAnchor = $("<a href =# >Login</a>");

loginAnchor.addClass("loginAnchor");

loginAnchor.appendTo(header2);

const loginDiv = $("<div></div>");
loginDiv.addClass("loginDiv");
loginDiv.appendTo(body);

const image2 = $(`<img>`);
image2.addClass("image");
image2.attr(
  "src",
  "https://www.heropa.com/wp-content/uploads//2021/03/Secure-login-bro.svg"
);
image2.appendTo(loginDiv);

const loginInput = $(
  `<br><input placeholder="Enter your Email" type = "email">`
);
loginInput.addClass("loginInput");
loginInput.appendTo(loginDiv);

const passwordInput = $(
  `<br><input placeholder="Enter your Password" type = "password">`
);
passwordInput.addClass("passwordInput");
passwordInput.appendTo(loginDiv);

const loginButton = $(`<br><button>Login</button>`);
loginButton.addClass("loginButton");
loginButton.appendTo(loginDiv);

const logoutDiv = $(`<div></div>`);
logoutDiv.addClass("logout");
logoutDiv.appendTo(container);

const logoutAnchor = $("<a href =# >Logout</a>");
logoutAnchor.addClass("logout");
logoutAnchor.appendTo(logoutDiv);

inputButtonDiv.hide();
divContainer.hide();
loginDiv.hide();
logoutAnchor.hide();

registerButton.on("click", () => {
  inputButtonDiv.show();
  divContainer.show();
  registerDiv.hide();
  logoutAnchor.show();
});

loginAnchor.on("click", () => {
  registerDiv.hide();
  loginDiv.show();
});

loginButton.on("click", () => {
  inputButtonDiv.show();
  divContainer.show();
  loginDiv.hide();
  logoutAnchor.show();
});

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

          toDos[i] = {
            task: input.val(),
            isCompleted: false,
            date: inputDate.val(),
          };
          console.log(toDos[i]);
          localStorage.setItem("toDosArray", JSON.stringify(toDos));
          // console.log(toDos);
        
      //addtoList()
      toDo()

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

      completedDiv.appendTo(container);

      completedDiv.on("click", () => {
        let answer = toDos.filter((element, i) => {
          return element.isCompleted === true;
        });

        listItem.show();

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

    pendingList.on("click", () => {
      inputButtonDiv.show();
      pendingList.hide();
    });

    completedList.on("click", () => {
      inputButtonDiv.show();
      completedList.hide();
    });

    completedButton.on("click", () => {
      element.isCompleted = true;

      console.log(element);
      if ((element.isCompleted = true)) {
        listItem.hide();
      }
    });

    completedAnchor.on("click", () => {
      let answer = toDos.filter((element, i) => {
        return element.isCompleted === true;
      });
      completedList.appendTo(listItem);

      listItem.hide();
      Pending.hide();
      completedList.show();

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

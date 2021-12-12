let toDos = ["wakeup","code","eat breakfast"];
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

const toggle = $(`<a href = "#">Dark/Light </a>`);
toggle.addClass("mode");
toggle.appendTo(container);

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

const addbutton = $(`<i class="fas fa-plus-circle"></i>`);
addbutton.text("");
addbutton.addClass("addbutton");
addbutton.appendTo(inputbuttondiv);

const RegisterDiv = $("<div></div>");
RegisterDiv.addClass("RegisterDiv");
RegisterDiv.appendTo(body);

const image = $(`<img>`);
image.addClass("image");
image.attr(
  "src",
  "https://www.heropa.com/wp-content/uploads//2021/03/Secure-login-bro.svg"
);
image.appendTo(RegisterDiv);

const greeting = $(`<h1>Welcome to Our App</h1>`);
greeting.addClass("greeting");
greeting.appendTo(RegisterDiv);

const Usernameinput = $(
  `<br><input placeholder="Enter your Username" type = "text">`
);
Usernameinput.addClass("Usernameinput");
Usernameinput.appendTo(RegisterDiv);

const Registerinput = $(
  `<br><input placeholder="Enter your Email" type = "email">`
);
Registerinput.addClass("Registerinput");
Registerinput.appendTo(RegisterDiv);

const rpasswordinput = $(
  `<br><input placeholder="Enter your Password" type = "password">`
);
rpasswordinput.addClass("rpasswordinput");
rpasswordinput.appendTo(RegisterDiv);

const Registerbutton = $(`<br><button>Register</button>`);
Registerbutton.addClass("Registerbutton");
Registerbutton.appendTo(RegisterDiv);

const header2 = $(`<h3>Already have account?</h3>`);

header2.addClass("header2");
header2.appendTo(RegisterDiv);

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

const logininput = $(
  `<br><input placeholder="Enter your Email" type = "email">`
);
logininput.addClass("logininput");
logininput.appendTo(loginDiv);

const passwordinput = $(
  `<br><input placeholder="Enter your Password" type = "password">`
);
passwordinput.addClass("passwordinput");
passwordinput.appendTo(loginDiv);

const loginbutton = $(`<br><button>Login</button>`);
loginbutton.addClass("loginbutton");
loginbutton.appendTo(loginDiv);

const logout = $(`<div></div>`);
logout.addClass("logoutAnchor");
logout.appendTo(container);

const logoutAnchor = $("<a href =# >Logout</a>");
logoutAnchor.addClass("logoutAnchor");
logoutAnchor.appendTo(logout);

inputbuttondiv.hide();
divContainer.hide();
loginDiv.hide();
logoutAnchor.hide();

Registerbutton.on("click", () => {
  inputbuttondiv.show();
  divContainer.show();
  RegisterDiv.hide();
  logoutAnchor.show();
});

loginAnchor.on("click", () => {
  RegisterDiv.hide();
  loginDiv.show();
});

loginbutton.on("click", () => {
  inputbuttondiv.show();
  divContainer.show();
  loginDiv.hide();
  logoutAnchor.show();
});

logoutAnchor.on("click", () => {
  inputbuttondiv.hide();
  divContainer.hide();
  loginDiv.hide();
  logoutAnchor.hide();
  RegisterDiv.show();
});

const toDo = () => {
  unorderedList.text("");

  toDos = JSON.parse(localStorage.getItem("toDosArray"));

  toDos.forEach((element, i) => {
    let listItem = $("<li></li>");
    listItem.addClass("listItem");
    const deletebutton = $(`<i class="fas fa-trash-alt"></i>`);
    const updatebutton = $(`<i class="fas fa-edit"></i>`);
    const completedbutton = $(`<i class="fa fa-check" aria-hidden="true"></i>`);
    const divDate = $(`<div>${element.date}</div>`);

    const Pending = $(`<a href ="#">Pending</a>`);
    Pending.addClass("Pending");
    Pending.appendTo(listItem);

    const CompletedL = $(`<a href ="#">Completed</a>`);
    CompletedL.addClass("complete");
    CompletedL.appendTo(listItem);

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
      toDos.forEach((todo) => {
        if (todo === element) {
          toDos.splice(i, 1);
        }
      });
      localStorage.setItem("toDosArray", JSON.stringify(toDos));

      listItem.remove();

      // for (let i = 0; i < storage.length; i++) {
      //   const remove = storage.splice(i, 1);
      //   const myJSON = JSON.stringify(remove);

      //   localStorage.setItem("toDosArray", toDos);
      // }
    });

    updatebutton.on("click", () => {
      //listItem.text(input.val());

      toDos.forEach((todo, i) => {
        if (element === todo) {
          toDos[i] = input.val();
        }
      });
      //localStorage.setItem("toDosArray", JSON.stringify(toDos));

      deletebutton.appendTo(listItem);
      updatebutton.appendTo(listItem);
      divDate.appendTo(listItem);
      completedbutton.appendTo(listItem);

      deletebutton.on("click", () => {
        listItem.remove();
      });

      updatebutton.on("click", () => {
        listItem.text(input.val());
        divDate.appendTo(listItem);
      });

      completedbutton.on("click", () => {
        element.isCompleted = true;
        console.log(element);

        listItem.hide();
      });
    });

    tasks.on("click", () => {
      element.isCompleted = false;
      if (element.isCompleted !== true) {
        console.log(element);
        inputbuttondiv.hide();

        Pending.appendTo(listItem);
        Pending.show();
      }

      completed.appendTo(container);

      completed.on("click", () => {
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
      });
    });

    Pending.on("click", () => {
      inputbuttondiv.show();
      Pending.hide();
    });

    CompletedL.on("click", () => {
      inputbuttondiv.show();
      CompletedL.hide();
    });

    completedbutton.on("click", () => {
      element.isCompleted = true;

      console.log(element);
      if ((element.isCompleted = true)) {
        listItem.hide();
      }
    });

    completed.on("click", () => {
      let answer = toDos.filter((element, i) => {
        return element.isCompleted === true;
      });
      CompletedL.appendTo(listItem);

      listItem.hide();
      Pending.hide();
      CompletedL.show();

      answer.forEach((element, i) => {
        toDos = [];
        const value = element.task;
        const p = $(`<p>${value}</p>`);
        p.addClass(p);
        p.appendTo(divContainer);
      });
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

  toDo();

  localStorage.setItem("toDosArray", JSON.stringify(toDos));

  toDos= JSON.parse(localStorage.getItem("toDosArray"));
};

addbutton.on("click", addtoList);

toggle.on("click", () => {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  myFunction();
});

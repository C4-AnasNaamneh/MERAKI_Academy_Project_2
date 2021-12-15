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
const toggle = $(`<a> <i class="fas fa-dot-circle"></i></a>`);
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
  `<input placeholder="Enter your username" type = "text"/>`
);
const br = $("<br/>");
br.appendTo(registerDiv);
//add class
usernameInput.addClass("usernameInput");
//append input to div
usernameInput.appendTo(registerDiv);
//creating input
const registerInput = $(
  `<input placeholder="Enter your Email" type = "email">`
);
//add class
registerInput.addClass("registerInput");
//append input to div
registerInput.appendTo(registerDiv);
//creating input
const rpasswordInput = $(
  `<input placeholder="Enter your Password" type = "password">`
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

const secondGreeting = $("<h1>Welcome</h1>");
secondGreeting.addClass("secondGreeting");
secondGreeting.appendTo(loginDiv);

//creating input
const loginInput = $(`<input placeholder="Enter your Email" type = "email">`);
//add class
loginInput.addClass("loginInput");
//append input to div
loginInput.appendTo(loginDiv);
//creating input
const passwordInput = $(
  `<input placeholder="Enter your Password" type = "password">`
);

const br1 = $("<br/>");
br1.appendTo(loginDiv);

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
const logoutAnchor = $(`<a><i class="fa fa-window-close" aria-hidden="true"></i>
</a>`);
//add class
logoutAnchor.addClass("logout");
//append anchor to div
logoutAnchor.appendTo(logoutDiv);

//hide divs that hold input ,inputdate,add button,unordered list and logout anchor from main page
inputButtonDiv.hide();
divContainer.hide();
loginDiv.hide();
logoutAnchor.hide();

const usernameError = $(
  `<p>Error: Username must be more than 6 characters</p>`
);
usernameError.addClass("usernameError");
usernameError.appendTo(registerDiv);

usernameError.hide();

const registerEmailError = $(
  `<p>Error: Email must be more than 6 characters</p>`
);
registerEmailError.addClass("registerEmailError");
registerEmailError.appendTo(registerDiv);
registerEmailError.hide();

const rpasswordError = $(
  `<p>Error: Password must be more than 6 charachters </p>`
);
rpasswordError.addClass("rpasswordError");
rpasswordError.appendTo(registerDiv);
rpasswordError.hide();

let dataBase = JSON.parse(localStorage.getItem("dataBaseArray")) || [];

//console.log(dataBase);

const registerAccount = () => {
  dataBase.forEach((element, i) => {
    if (
      usernameInput.val().length >= 7 &&
      registerInput.val().length >= 7 &&
      passwordInput.val().length >= 7
    ) {
      console.log("www");

      inputButtonDiv.show();
      divContainer.show();
      registerDiv.hide();
      logoutAnchor.show();
    } else if (usernameInput.val().length < 7) {
      if (registerInput.val().length < 7) {
        registerDiv.show();
        loginDiv.hide();
        inputButtonDiv.hide();
        divContainer.hide();
        usernameError.show();
        registerEmailError.show();
        console.log("s");
      } 
      if (registerInput.val().length <7 ) {
        registerDiv.show();
        loginDiv.hide();
        inputButtonDiv.hide();
        divContainer.hide();
        usernameError.show();
        registerEmailError.show();
        rpasswordError.show();
      }
      
      else {
        registerDiv.show();
        loginDiv.hide();
        inputButtonDiv.hide();
        divContainer.hide();
        usernameError.show();
        registerEmailError.hide();
        rpasswordError.hide();
      }
    } else {

      localStorage.setItem("dataBaseArray", JSON.stringify(dataBase));

    }
    
   
  });

  localStorage.setItem("dataBaseArray", JSON.stringify(dataBase));
};
registerAccount();

//on click
registerButton.on("click", () => {
  // console.log("usernameInput.val()", usernameInput.val());
  dataBase.push({
    username: usernameInput.val(),
    registerEmail: registerInput.val(),
    registerPassword: rpasswordInput.val(),
  });

  console.log(dataBase);

  inputButtonDiv.show();
  divContainer.show();
  registerDiv.hide();
  logoutAnchor.show();

  localStorage.setItem("dataBaseArray", JSON.stringify(dataBase));

  registerAccount();
});



const loginInputError = $(`<p>Error:Email doesn't exist</p>`);
loginInputError.addClass("loginInputError");
loginInputError.appendTo(loginDiv);

loginInputError.hide();

const passwordInputError = $(`<p>Error:Wrong Password ,Please try again `);
passwordInputError.addClass("passwordInputError");
passwordInputError.appendTo(loginDiv);

const loginAccount = () => {
  // dataBase = [];

  dataBase.forEach((login, i) => {

    if (loginInput.length >= 7 && passwordInput.length){

    inputButtonDiv.show();
    divContainer.show();
  
    } else if (loginInput.length < 7 ) {
       if (passwordInput.length <7) {

        loginDiv.show();
        inputButtonDiv.hide();
        divContainer.hide();
        loginInputError.hide()
        passwordInputError.show()
  
       } else {


        loginDiv.show();
        inputButtonDiv.hide();
        divContainer.hide();
        loginInputError.show()
        passwordInputError.show()

       }

    } else {

      loginDiv.show();
      inputButtonDiv.hide();
      divContainer.hide();
      loginInputError.show()
      passwordInputError.show()


    }


  });

  loginInput.appendTo(loginDiv);
  passwordInput.appendTo(loginDiv);
  loginButton.appendTo(loginDiv);

  localStorage.setItem("dataBaseArray", JSON.stringify(dataBase));
};
loginAccount();

//on click
loginButton.on("click", () => {
  dataBase.push({
    loginEmail: loginInput.val(),

    loginPassword: passwordInput.val(),
  });

  inputButtonDiv.show();
  divContainer.show();
  loginDiv.hide();
  logoutAnchor.show();

  localStorage.setItem("dataBaseArray", JSON.stringify(dataBase));

  loginAccount();
});

//on click
loginAnchor.on("click", () => {
  registerDiv.hide();
  loginDiv.show();
});

//on click
logoutAnchor.on("click", () => {
  inputButtonDiv.hide();
  divContainer.hide();
  loginDiv.hide();
  logoutAnchor.hide();
  registerDiv.show();
});

//retrieving data from local storage

let toDos = JSON.parse(localStorage.getItem("toDosArray")) || [];
//function that renders array elements
const toDo = () => {
  toDos.forEach((element, i) => {
    //creating list
    let listItem = $("<li></li>");
    //add class
    listItem.addClass("listItem");
    // create button
    const deleteButton = $(`<i class="fas fa-trash-alt"></i>`);
    //creating button
    const updateButton = $(`<i class="fas fa-edit"></i>`);
    //create button
    const completedButton = $(`<i class="fa fa-check" aria-hidden="true"></i>`);
    //creating div for date
    const divDate = $(`<div>${element.date}</div>`);
    //creating anchortag
    const pendingList = $(`<a href ="#">Pending</a>`);
    //add class
    pendingList.addClass("pendingList");
    //append anchor to list
    pendingList.appendTo(listItem);
    //creating anchortag
    //add class
    // append anchor to list
    // completedList.appendTo(listItem);
    //adding values to list
    listItem.text(element.task);

    //append list to unordered list
    listItem.appendTo(unorderedList);
    // append date div to list
    divDate.appendTo(listItem);
    //append delete button to list
    deleteButton.appendTo(listItem);
    //append update button to list
    updateButton.appendTo(listItem);
    //append completed button to list
    completedButton.appendTo(listItem);
    //add classes for buttons
    deleteButton.addClass("deleteButton");
    updateButton.addClass("updateButton");
    completedButton.addClass("completedButton");

    // on click
    deleteButton.on("click", () => {
      toDos.forEach((todo, i) => {
        if (todo === element) {
          toDos.splice(i, 1);
        }
        console.log(toDos[i]);
      });
      localStorage.setItem("toDosArray", JSON.stringify(toDos));

      listItem.remove();
    });
    // on click
    updateButton.on("click", () => {
      toDos[i] = {
        task: input.val(),
        isCompleted: false,
        date: inputDate.val(),
      };

      console.log(toDos[i], i);

      localStorage.setItem("toDosArray", JSON.stringify(toDos));
      unorderedList.text("");

      toDo();
    });
    // on click
    tasksDiv.on("click", () => {
      element.isCompleted = false;
      if (element.isCompleted !== true) {
        console.log(element);
        inputButtonDiv.hide();

        pendingList.appendTo(listItem);
        pendingList.show();
      }
      localStorage.setItem("toDosArray", JSON.stringify(toDos));
    });
    // on click
    pendingList.on("click", () => {
      inputButtonDiv.show();
      //pendingList.hide();
      $(".pendingList").hide();
      input.val("");
      localStorage.setItem("toDosArray", JSON.stringify(toDos));
    });

    // on click
    completedButton.on("click", () => {
      element.isCompleted = true;
      if ((element.isCompleted = true)) {
        listItem.hide();
      }
      // console.log(element);
      // completedArray.push(element)
      // console.log(completedArray);

      localStorage.setItem("toDosArray", JSON.stringify(toDos));
    });

    // on click
    completedDiv.on("click", () => {
      let answer = toDos.filter((element, i) => {
        return element.isCompleted === true;
      });
      //completedList.appendTo(listItem);
      console.log(answer);

      listItem.hide();

      //listItem.show();
      // pendingList.hide();
      // completedList.show();

      answer.forEach((element, i) => {
        toDos = [];
        const value = element.task;
        const completedList = $(`<a href ="#">Completed</a>`);
        completedList.addClass("completedList");

        const p = $(`<p>${value} </p>`);
        p.addClass("p");
        completedList.appendTo(p);

        p.appendTo(divContainer);
        inputButtonDiv.hide();
        completedList.on("click", () => {
          inputButtonDiv.show();
          $(".completedList").hide();
          //divContainer.hide()
          //p.appendTo(divContainer);
          $(".p").hide();
          input.val("");

          localStorage.setItem("toDosArray", JSON.stringify(toDos));
        });
      });

      //store data to local storage

      localStorage.setItem("toDosArray", JSON.stringify(toDos));
    });

    // on click
  });
};
toDo();

//callback function holds array and local storage get invoked when clicking on add button
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

const list = [];

const STATUS = {
  TODO: "To Do",
  DONE: "Done",
};

const PRIORITY = {
  HIGH: "High",
  LOW: "Low",
};

function createHighCheck() {
  function addTask(task, newStatus) {
    newlist = list.push({
      name: task,
      STATUS: newStatus,
      PRIORITY: HIGH,
    });
  }
  let taskText = document.querySelector(".addHighCheck").value;
  let checkbox = document.querySelector(".checkboxHigh");
  function addnewTask() {
    let div = document.createElement("div");
    div.className = "check";
    div.id = "check";
    checkbox.prepend(div);

    let checkLabel = document.createElement("label");
    checkLabel.prepend(taskText);
    div.prepend(checkLabel);

    let labCheckbox = document.createElement("input");
    labCheckbox.type = "checkbox";
    labCheckbox.addEventListener("click", function () {
      if (labCheckbox.checked) {
        div.style.background = "orange";
        function changeStatus(task, newStatus) {
          if (list.filter((item) => item.name === task)) {
            let index = list.indexOf(list.find((item) => item.name === task));
            newlist = list[index].STATUS = newStatus;
          }
        }
        changeStatus(taskText, STATUS.DONE);
      } else {
        div.style.background = "azure";
        changeStatus(taskText, STATUS.TODO);
      }
    });
    checkLabel.prepend(labCheckbox);

    let closeBut = document.createElement("div");
    closeBut.id = "button";
    closeBut.innerHTML = `\&times`;
    div.append(closeBut);

    event.preventDefault();
    addTask(taskText);
  }
  addnewTask();
}

function createCheck() {
  function addTask(task, newStatus) {
    newlist = list.push({
      name: task,
      STATUS: newStatus,
      PRIORITY: LOW,
    });
  }
  let taskText = document.querySelector(".addCheck").value;
  let checkbox = document.querySelector(".checkbox");

  function addnewTask() {
    let div = document.createElement("div");
    div.className = "check";
    div.id = "check";
    checkbox.prepend(div);

    let checkLabel = document.createElement("label");
    checkLabel.prepend(taskText);
    div.prepend(checkLabel);

    let labCheckbox = document.createElement("input");
    labCheckbox.type = "checkbox";
    labCheckbox.addEventListener("click", function () {
      if (labCheckbox.checked) {
        div.style.background = "orange";
        function changeStatus(task, newStatus) {
          if (list.filter((item) => item.name === task)) {
            let index = list.indexOf(list.find((item) => item.name === task));
            newlist = list[index].STATUS = newStatus;
          }
        }
        changeStatus(taskText, STATUS.DONE);
      } else {
        div.style.background = "azure";
        changeStatus(taskText, STATUS.TODO);
      }
    });
    checkLabel.prepend(labCheckbox);

    let closeBut = document.createElement("div");
    closeBut.className = "button";
    closeBut.id = "button";
    closeBut.innerHTML = `\&times`;
    div.append(closeBut);

    event.preventDefault();
    addTask(taskText);
  }
  addnewTask();
}

document.getElementById("addHighTask").onsubmit = createHighCheck;
document.querySelector(".plusbutton1").onclick = createHighCheck;
document.getElementById("addTask").onsubmit = createCheck;
document.querySelector(".plusbutton2").onclick = createCheck;

function render() {
  let divs = document.querySelectorAll(".check");
  for (let div of divs) {
    div.onclick = function () {
      div.remove();
    };
  }
  list.forEach((elem) => {
    if (elem.priority === PRIORITY.HIGH) {
      let index = list.indexOf(list.find((item) => item.name === task));
      newlist = list[index].priority = PRIORITY.HIGH;
    } else {
      let index = list.indexOf(list.find((item) => item.name === task));
      newlist = list[index].priority = PRIORITY.LOW;
    }
  });
}

function deleteTask(task) {
  newlist = list.filter((item) => item.name !== task);
  render();
  return newlist;
}

let todo = document.querySelector(".checkbox");
todo.addEventListener("click", function (e) {
  let el = e.target;
  if (el.closest(".button")) {
    deleteTask(el);
  }
});

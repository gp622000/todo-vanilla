const input = document.querySelector("#input");
const details = document.querySelector(".task-details-container");
var tasks = [];
var taskCount = 0;
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    // event.preventDefault();
    const inputValue = input.value;
    // div.left-side-container created
    const taskDetailsInner = document.createElement("div");
    taskDetailsInner.setAttribute("class", "task-details-inner-container");

    var leftSideContainer = document.createElement("div");
    leftSideContainer.setAttribute("class", "left-side-container");

    var checkboxNode = document.createElement("input");
    checkboxNode.setAttribute("type", "checkbox");

    var texDiv = document.createElement("div");
    texDiv.setAttribute("class", "div1");
    const textNode = document.createTextNode(inputValue);
    texDiv.appendChild(textNode);

    leftSideContainer.appendChild(checkboxNode);
    leftSideContainer.appendChild(texDiv);

    var rightSideContainer = document.createElement("div");
    rightSideContainer.setAttribute("class", "right-side-container");

    var image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/1617/1617543.png"
    );
    image.setAttribute("class", "delete-icon");

    rightSideContainer.appendChild(image);

    taskDetailsInner.appendChild(leftSideContainer);
    taskDetailsInner.appendChild(rightSideContainer);

    // texDiv.appendChild(textNode);
    // checkboxNode.setAttribute("id", "checkbox");
    // texDiv.setAttribute("id", "div-1");
    // var textNode = document.createTextNode(inputValue);
    details.appendChild(taskDetailsInner);
  }
  const taskInner = document.querySelectorAll(".task-details-inner-container");
  taskCount = taskInner.length;
  for (let i = 0; i < taskInner.length; i++) {
    taskInner[i].style.display = "flex";
    taskInner[i].style.width = "100%";
    taskInner[i].style.justifyContent = "space-between";
    taskInner[i].style.fontSize = "1.2rem";
    taskInner[i].style.margin = "5px";
  }

  const leftSide = document.querySelectorAll(".div1");
  for (let i = 0; i < leftSide.length; i++) {
    leftSide[i].style.marginLeft = "10px";
  }

  const img = document.querySelectorAll("img");
  for (let i = 0; i < img.length; i++) {
    img[i].style.width = "20px";
    img[i].style.height = "20px";
    img[i].style.marginRight = "20px";
  }

  //   const div1 = document.querySelector("#div-1");
  //   div1.style.fontSize = "1.2rem";
  //   checkbox.style.marginRight = "10px";
  //   checkbox.style.fontSize = "1.2rem";
  const taskLeft = document.querySelector(".left-task-category");
  taskLeft.innerText = `${taskCount} tasks left`;
  console.log(taskCount);
});

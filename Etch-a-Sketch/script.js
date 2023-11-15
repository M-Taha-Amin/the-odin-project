const numberInput = document.querySelector(".number-input");
const bucketBtn = document.querySelector(".bucket");
const rainbowBtn = document.querySelector(".rainbow");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const warning = document.querySelector(".warning");
const grid = document.querySelector(".grid");
let isMouseHeld = false;

// Generate Grid based on Input Value
numberInput.addEventListener("input", function (event) {
  const numberInputValue = +event.target.value;
  if (
    isNaN(numberInputValue) ||
    numberInputValue < 1 ||
    numberInputValue > 100
  ) {
    warning.style.display = "flex";
    setTimeout(function () {
      warning.style.display = "none";
    }, 3000);
  } else {
    warning.style.display = "none";
    makeGrid(numberInputValue);
  }
});

// Function to make grid
const makeGrid = function (value) {
  grid.innerHTML = "";
  for (let i = 1; i <= value * value; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    grid.style.gridTemplateColumns = `Repeat(${value},1fr)`;
    grid.append(block);
  }
};

// Function to Generate random color
const randomColorArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const generateRandomColor = function () {
  let randomColor = "#";
  for (let i = 1; i <= 6; i++) {
    const randomIndex =
      randomColorArray[Math.floor(Math.random() * randomColorArray.length)];
    randomColor += randomIndex;
  }
  return randomColor;
};
document.addEventListener("click", function () {
  console.log(generateRandomColor());
});

// Event Listeners
bucketBtn.addEventListener("click", function () {
  document.addEventListener("mousedown", function (event) {
    isMouseHeld = true;
    const target = event.target;
    if (target.classList.contains("block")) {
      target.style.backgroundColor = "black";
    }
  });
  document.addEventListener("mousemove", function (event) {
    if (isMouseHeld) {
      const target = event.target;
      if (target.classList.contains("block")) {
        target.style.backgroundColor = "black";
      }
    }
  });
  document.addEventListener("mouseup", function () {
    isMouseHeld = false;
  });
});
rainbowBtn.addEventListener("click", function () {
  document.addEventListener("mousedown", function (event) {
    isMouseHeld = true;
    const target = event.target;
    if (target.classList.contains("block")) {
      target.style.backgroundColor = `${generateRandomColor()}`;
    }
  });
  document.addEventListener("mousemove", function (event) {
    if (isMouseHeld) {
      const target = event.target;
      if (target.classList.contains("block")) {
        target.style.backgroundColor = `${generateRandomColor()}`;
      }
    }
  });
  document.addEventListener("mouseup", function () {
    isMouseHeld = false;
  });
});
eraserBtn.addEventListener("click", function () {
  document.addEventListener("mousedown", function (event) {
    isMouseHeld = true;
    const target = event.target;
    if (target.classList.contains("block")) {
      target.style.backgroundColor = "white";
    }
  });
  document.addEventListener("mousemove", function (event) {
    if (isMouseHeld) {
      const target = event.target;
      if (target.classList.contains("block")) {
        target.style.backgroundColor = "white";
      }
    }
  });
  document.addEventListener("mouseup", function () {
    isMouseHeld = false;
  });
});
clearBtn.addEventListener("click", function () {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach(function (block) {
    block.style.backgroundColor = "transparent";
  });
});

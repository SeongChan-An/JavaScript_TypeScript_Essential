const items = document.querySelector(".items");
const form = document.querySelector(".input_form");
const input = document.querySelector(".footer__input");
const resetBtn = document.querySelector(".all-delete");

resetBtn.addEventListener("click", () => {
  items.innerHTML = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onAdd();
});

function onAdd() {
  const inputTxt = input.value;
  console.log(inputTxt);
  if (inputTxt === "") {
    input.focus();
    return;
  }
  const item = createItem(inputTxt);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

function createItem(inputTxt) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.innerHTML = `
      <div class="item">
        <span class="item__name">${inputTxt}</span>
        <button class="item__delete"">
          <i class="fas fa-trash-alt"></i>
        </button>        
      </div>
      <div class="item__divider"></div>
        `;

  return itemRow;
}

items.addEventListener("click", (event) => {
  // console.log(event);
  // console.log(event.target);
  // console.log(event.target.classList);
  // console.log(event.target.parentNode);
  if (event.target.classList.contains("item")) {
    onClickItem(event);
  } else if (
    event.target.classList.contains("item__delete") ||
    event.target.parentNode.classList.contains("item__delete")
  ) {
    onClickItemDelete(event);
  }
});

function onClickItem(event) {
  if (event.target.classList.contains("checked")) {
    event.target.classList.remove("checked");
  } else {
    event.target.classList.add("checked");
  }
}

function onClickItemDelete(event) {
  event.target.parentNode.parentNode.parentNode.remove();
}

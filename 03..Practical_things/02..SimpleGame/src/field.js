"use strict";

import * as sound from "./sound.js";

const imgMaxSize = 80;

export const ItemType = Object.freeze({
  carrot: "carrot",
  bug: "bug",
});

export class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.onFieldClickListener = this.onFieldClickListener.bind(this);
    this.field.addEventListener("click", this.onFieldClickListener);
  }

  setItemClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  init() {
    this.field.innerHTML = "";
    this.#addItem("carrot", "img/carrot.png", this.carrotCount);
    this.#addItem("bug", "img/bug.png", this.bugCount);
  }

  #addItem(className, imgPath, count) {
    const startPointX = 0;
    const startPointY = 0;
    const endPointX = this.fieldRect.width - imgMaxSize;
    const endPointY = this.fieldRect.height - imgMaxSize;

    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imgPath);
      item.style.position = "absolute";
      const newX = this.randomNumber(startPointX, endPointX);
      const newY = this.randomNumber(startPointY, endPointY);

      item.style.left = `${newX}px`;
      item.style.top = `${newY}px`;
      item.style.userDrag = "none";
      this.field.appendChild(item);
    }
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  onFieldClickListener(event) {
    const target = event.target;
    if (target.matches(".carrot")) {
      sound.playCarrot();
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.carrot);
    } else if (target.matches(".bug")) {
      this.onItemClick && this.onItemClick(ItemType.bug);
    }
  }

  playSound(sound) {
    sound.currentTime = 0;
    sound.play();
  }
}
